# rollup-config-webext

> Suggested configuration to bundle files in browser extensions.

It bundles external dependencies like browserify and creates an IIFE bundle.

## Install

```sh
npm install --save-dev rollup-config-webext
```

## Usage

```sh
rollup --config node:webext src/background.js --output dist/background.js
```

## Related

* [rollup-config-es6-browser](https://github.com/bfred-it/rollup-config-es6-browser)

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
