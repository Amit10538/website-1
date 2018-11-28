---
sidebar: auto
---

# Config Reference

Poi will search `poi.config.js` `.poirc` `.poirc.json` or `poi` property in `package.json` from your project.

The config is basically a pure object containing following properties.

```js
module.exports = {
  // ...config
}
```

## entry

- Type: `string` `string[]` `object`
- Default: `index` which means it will use `index.js` or `index.ts` by default.

Specify the entry file(s).

Note that the entres will be treated as files relative to current directory by default, if you want to use a npm package as entry, you need to prefix it with `module:`, like `module:object.assign`.

## output

### output.dir

- Type: `string`
- Default: `dist`
- CLI: `-d, --out-dir <dir>`

The directory to output files.

### output.clean

- TypeL `boolean`
- Default: `true`

Clean output directory before bundling.

### output.format

- Type: `string`
- Default: `iife`
- Values: `iife` `cjs` `umd`
- CLI: `--format <format>`

Specify the output format.

### output.moduleName

- Type: `string`


Specify the output module name for bundles in `umd` format.

### output.sourceMap

- Type: `boolean`
- Default: `false` in `production` mode, `true` otherwise
- CLI: `--source-map`

Generate source map.

### output.minimize

- Type: `boolean`
- Default: `true` in `production` mode, `false` otherwise
- CLI: `--minimize`

Minimize output files.

### output.publicUrl

- Type: `string`
- Default: `'/'`
- CLI: `--public-url <url>`

The base URL your application bundle will be deployed at. This is the equivalent of webpack's `output.publicPath`, but Poi also needs this value for other purposes, so you should always use this instead of modifying webpack `output.publicPath`.

### output.fileNames

- Type: `FileNames`
- Default: `DefaultFileNames`

```ts
interface FileNames {
  js?: string
  css?: string
  chunk?: string
  font?: string
  image?: string
}

// In `iife` output format
const DefaultFileNames = {
  js: isProduction
    ? 'assets/js/[name].[chunkhash:8].js'
    : 'assets/js/[name].js',
  css: isProduction
    ? 'assets/css/[name].[chunkhash:8].css'
    : 'assets/css/[name].css',
  chunk: isProduction
    ? 'assets/js/[name].[chunkhash:8].chunk.js'
    : 'assets/js/[name].chunk.js',
  font: isProduction
    ? 'assets/fonts/[path][name].[hash:8].[ext]'
    : 'assets/fonts/[path][name].[ext]',
  image: isProduction
    ? 'assets/images/[path][name].[hash:8].[ext]'
    : 'assets/images/[path][name].[ext]'
}

// In `cjs` `umd` output format
const DefaultFileNames = {
  js: '[name].js',
  css: '[name].css',
  chunk: '[name].chunk.js',
  font: '[path][name].[ext]',
  image: '[path][name].[ext]'
}
```

### output.target

- Type: `'browser' | 'electron'`
- Default: `'browser'`
- CLI: `--target <target>`

Bundle target.

## babel

### babel.jsx

- Type: `string`
- Default: `react`
- Values: `react` `vue` `h` or any JSX pragma
- CLI: `--jsx <jsx>`

Set JSX syntax. This ONLY works with our default Babel preset, which means it won't work if you're using custom Babel config file like `babel.config.js`.

### babel.transpileModules

- Type: `string[]` `string`

Transpile specific modules in Babel transpilation process. By default Babel only transpiles files outside `node_modules` directory.

## css

### css.extract

- Type: `boolean`
- Default: `true` in production builds, `false` otherwise

Whether to extract CSS into standalone CSS files.

### css.loaderOptions

- Type: `LoaderOptions`

Specify the options for CSS loaders.

```ts
interface LoaderOptions {
  // css-loader
  css?: any
  // sass-loader
  sass?: any
  // postcss-loader
  postcss?: any
  // less-loader
  less?: any
  // stylus-loader
  stylus?: any
}
```