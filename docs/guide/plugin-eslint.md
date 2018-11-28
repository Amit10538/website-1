---
sidebar: auto
---

# @poi/plugin-eslint

Use ESLint to lint JavaScript.

## Install

```bash
yarn add @poi/plugin-eslint@next --dev
```

## How to use

In your `poi.config.js`:

```js
module.exports = {
  plugins: [
    {
      resolve: '@poi/plugin-eslint'
    }
  ]
}
```

Then add a `.eslintrc.js` in your project:

```js
module.exports = {
  extends: ['eslint:recommended']
}
```

Now ESLint will check your JS files at compile time.
