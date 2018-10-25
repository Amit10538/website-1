# Transforms

In Poi, you can reference a file in another one, they are so-called assets. For many kinds of assets, Poi will perform proper transformations, e.g. transform ES2015 syntax to ES5 using Babel.

Here's a list of all built-in transforms:

|Type|Associated Extension(s)|
|---|---|
|JavaScript|`.js` `.jsx`|
|Vue|`.vue`|
|GraphQL|`.gql` `.graphql`|
|YAML|`.yml` `.yaml`|
|TOML|`.toml`|
|JSON|`.json`|
|ReasonML|`.re`|
|CSS|`.css`|
|SCSS|`.scss`|
|SASS|`.sass`|
|LESS|`.less`|
|Stylus|`.styl` `.stylus`|
|CSS modules|`.module.{css,less,styl,stylus,sass,scss}`|


## JavaScript

JavaScript is transpiled by [Babel](https://babeljs.io/docs/en) which is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in old browsers or environments.

When Babel config file was not found in your project root, Poi will use a default [Babel preset](https://github.com/egoist/poi/blob/master/packages/poi/lib/babel/preset.js) which includes everything needed for building a modern web app:

- preset-env
- JSX support (React, Vue or custom JSX pragma)
- flow and typescript support (Strip types but does not type-check its input)
- plugin-proposal-object-rest-spread
- plugin-proposal-class-properties
- plugin-transform-runime
- [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros)

### Preset Options

You can use the default preset with some customzations:

```js
// babel.config.js
module.exports = {
  presets: [
    ['module:poi/babel', options]
  ]
}
```

#### options.jsx

- Type: `'react' | 'vue' | string`
- Default: `'react'`

#### options.flow

- Type: `boolean`
- Default: `true`

Enable Flow support.

#### options.typescript

- Type: `boolean`
- Default: `true`

Enable TypeScript support, only apply to `.tsx?` files and `lang="ts"` block in `.vue` files. 

## CSS

CSS files will be processed by [PostCSS](https://postcss.org/) when a PostCSS config file is found in your project.

### Pre-Processors

Common CSS pre-processors are also supported but you need to install relevant loaders manually in your project:

```bash
# Sass
yarn add sass-loader node-sass --dev

# Less
yarn add less-loader less --dev

# Stylus
yarn add stylus-loader stylus --dev
```

### CSS Modules

To import CSS or other pre-processor files as CSS Modules in JavaScript, the filename should end with `.module.(css|less|sass|scss|styl)`:

```js
import styles from './foo.module.css'
// works for all supported pre-processors as well
import sassStyles from './foo.module.scss'
```

### Passing Options to Pre-Processor Loaders

Sometimes you may want to pass options to the pre-processor's webpack loader. You can do that using the css.loaderOptions option in `poi.config.js`. For example, to pass some shared global variables to all your Sass styles:

```js
// poi.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/variables.scss";`
      }
    }
  }
}
```