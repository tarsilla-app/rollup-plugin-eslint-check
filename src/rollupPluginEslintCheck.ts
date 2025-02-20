import { exec } from 'child_process';

import { Plugin } from 'rollup';

type RollupEslintCheckOptions = {
  config?: string;
  folder?: string;
};

function rollupPluginEslintCheck({ config, folder = '.' }: RollupEslintCheckOptions = {}): Plugin {
  return {
    name: 'eslint-check',
    buildStart() {
      const command = config ? `eslint --config ${config} ${folder}` : `eslint ${folder}`;
      return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
          if (error) {
            reject(new Error('Eslint check failed', { cause: error }));
          } else {
            resolve();
          }
        });
      });
    },
  };
}

export { rollupPluginEslintCheck, type RollupEslintCheckOptions };
