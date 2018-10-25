# Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By default you will have `NODE_ENV` defined for you, and any other environment variables defined in a `.env` file or your config file.

The environment variables are embedded during the build time.

## Adding Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
POI_APP_SECRET_CODE=abcdef
```

::: warning
You're recommended to create custom environment variables beginning with `POI_`, otherwise you may [accidentally exposing a private key](https://github.com/facebook/create-react-app/issues/865#issuecomment-252199527) on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.
:::

## Adding Environment Variables In Poi Config File

You can also use `envs` option in `poi.config.js` to define permanent environment variables:

```js
module.exports = {
  envs: {
    POI_APP_SECRET: 'abcdef'
  }
}
```

## Adding Temporary Environment Variables In Your Shell

You can start the development server with a temporary variable defined:

```bash
# Linux / MacOS
POI_APP_SECRET=abcdef poi dev

# Windows (cmd.exe)
set "POI_APP_SECRET=abcdef" && poi dev

# Windows (powershell)
($env:POI_APP_SECRET = "abcdef") -and (poi dev)
```

In this case, your variable name __MUST__ start with `POI_` otherwise it will not be embeded in your app code.