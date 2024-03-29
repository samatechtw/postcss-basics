# PostCSS Basics

[PostCSS](https://github.com/postcss/postcss) plugin pack for quick project bootstrapping.

Intended for use with [Vite](https://github.com/vitejs/vite), so `postcss-modules` and `postcss-import` are not included.

Plugins:
- [`autoprefixer`](https://github.com/postcss/autoprefixer)
- [`postcss-mixins`](https://github.com/postcss/postcss-mixins)
- [`postcss-nested`](https://github.com/postcss/postcss-nested)
- [`postcss-simple-vars`](https://github.com/postcss/postcss-simple-vars)
- [`@samatech/postcss-colors`](https://github.com/samatechtw/postcss-colors)

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev @samatech/postcss-basics
```

**Step 2:** Check your project for existing PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, first add it according to [PostCSS docs].

**Step 3:** Add the plugin to plugins list (note the spread operator and the extra `()` after the `import` statement):

```javascript
import postcssBasics from '@samatech/postcss-basics'
export default {
  plugins: [
    ...postcssBasics(),
  ],
};
```

This can be simplified if you are not using other plugins:
```javascript
import postcssBasics from '@samatech/postcss-basics'
export default {
  plugins: postcssBasics(),
};
```

[PostCSS docs]: https://github.com/postcss/postcss#usage


## Options

**TODO**

- Pass through options for plugins
- Disable plugins


Call plugin function to set options:

```js
import postcssBasics from '@samatech/postcss-basics'
postcssBasics()
```
