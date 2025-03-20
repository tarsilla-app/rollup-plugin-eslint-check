# rollup-plugin-eslint-check

A Rollup plugin that runs ESLint during the build process. It helps catch linting errors early and prevents a build from completing if issues are detected.

## Installation

```sh
npm install --save-dev @tarsilla/rollup-plugin-eslint-check
```

## Usage

In your Rollup configuration (see rollup.config.js), add the plugin to your plugins array:

```js
import { rollupPluginEslintCheck } from '@tarsilla/rollup-plugin-eslint-check';
 
export default {
  // ...existing configuration...
  plugins: [
    // ...other plugins...
    rollupPluginEslintCheck({ config: '.eslintrc.js', folder: 'src' }),
  ],
};
```

Alternatively, if you want to use the default Eslint configuration, simply add the plugin without options:

```js
rollupPluginEslintCheck();
```

## Options

The plugin accepts an options object of type `RollupEslintCheckOptions`:

| Option   | Type   | Description                                                  | Default     |
|----------|--------|--------------------------------------------------------------|-------------|
| config   | string | Path to your custom ESLint configuration file. If not provided, the plugin will run with the default eslint settings. | `undefined` |
| folder   | string | Path to the folder to inspect, the plugin will run with the default eslint settings. | `undefined` |

## How It Works

During Rollup's `buildStart` hook, the plugin executes ESLint. If any lint errors are detected, the build process is aborted with an error message.

## Contributing

Contributions are welcome! Please ensure your pull request adheres to the project's linting and testing guidelines.

## License

Released under the [MIT License](LICENSE).