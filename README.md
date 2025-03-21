# @tarsilla/rollup-plugin-eslint-check

A Rollup plugin that runs ESLint during the build process. It helps catch linting errors early and prevents a build from completing if issues are detected.

## Features

- **Automatic Linting:** Runs ESLint automatically during the Rollup build.
- **Customizable Configuration:** Accepts custom ESLint configuration via options.
- **Early Error Detection:** Aborts the build if lint errors are found, ensuring code quality.
- **Seamless Integration:** Easily integrates into your existing Rollup setup.
- **Cross-Platform:** Works on any platform supported by Node.js.

## Installation

```sh
npm install --save-dev @tarsilla/rollup-plugin-eslint-check
```

or

```sh
yarn add --dev @tarsilla/rollup-plugin-type-check
```

## Usage

In your Rollup configuration (see rollup.config.js), add the plugin to your plugins array:

```js
import { rollupPluginEslintCheck } from '@tarsilla/rollup-plugin-eslint-check';
 
export default {
  // ...existing configuration...
  plugins: [
    // ...other plugins...
    rollupPluginEslintCheck();
  ],
};
```

## Configuration Options

You can override default settings by creating passing options to the plugin.
The plugin accepts an object of type `RollupEslintCheckOptions`:

| Option   | Type   | Description                                                  | Default     |
|----------|--------|--------------------------------------------------------------|-------------|
| config   | string | Path to your custom ESLint configuration file. If not provided, the plugin will run with the default eslint settings. | `undefined` |
| folder   | string | Path to the folder to inspect, the plugin will run with the default eslint settings. | `undefined` |

Example:

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

## How It Works

During Rollup's `buildStart` hook, the plugin executes ESLint. If any lint errors are detected, the build process is aborted with an error message.

## Contributing

Contributions are welcome! Please ensure your pull request adheres to the project's linting and testing guidelines.

## License

Released under the [MIT License](LICENSE).