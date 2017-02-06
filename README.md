# PostHTML Tape [<img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML" width="90" height="90" align="right">][posthtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[PostHTML Tape] lets you quickly test [PostHTML] plugins.

1. Install this dependency to your project:

   ```sh
   npm install --save-dev posthtml-tape
   ```

2. Add the `posthtml-tape` task to your `package.json`:

   ```json
   {
      "scripts": {
        "tape": "posthtml-tape"
      }
   }
   ```

3. Add tests to your `.tape.js` file:

   ```js
   module.exports = {
		'posthtml-my-plugin': {
			'basic': {
				message: 'supports basic usage'
			}
		}
   };
   ```

That’s it! Now you can use the `tape` task:

```sh
npm run tape
```

## Options

Options may be passed through `package.json` using `posthtmlConfig`:

```json
{
	"posthtmlConfig": {
		"plugin": "path/to/plugin.js",
		"config": "path/to/.tape.js",
		"fixtures": "path/to/htmldir"
	}
}
```

Options may be passed through arguments:

```sh
posthtml-tape --plugin=path/to/plugin.js --config=path/to/.tape.js
```

[npm-url]: https://www.npmjs.com/package/posthtml-tape
[npm-img]: https://img.shields.io/npm/v/posthtml-tape.svg
[cli-url]: https://travis-ci.org/jonathantneal/posthtml-tape
[cli-img]: https://img.shields.io/travis/jonathantneal/posthtml-tape.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/posthtml-tape.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/posthtml/posthtml
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostHTML Tape]: https://github.com/jonathantneal/posthtml-tape
[PostHTML]: https://github.com/posthtml/posthtml


