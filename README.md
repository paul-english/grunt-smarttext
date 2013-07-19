# grunt-smarttext

> Preprocess text in html files replacing quotes, ellipses, and other characters with their encoded utf equivalent

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-smarttext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-smarttext');
```

## The "smarttext" task

### Overview
In your project's Gruntfile, add a section named `smarttext` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  smarttext: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.singles
Type: `Boolean`
Default value: `true`

Should the parser replace single quotes with their smart equivalent

#### options.apostrophes
Type: `Boolean`
Default value: `true`

Should the parser replace apostrophes with their smart equivalent

#### options.doubles
Type: `Boolean`
Default value: `true`

Should the parser replace double quotes with their smart equivalent

#### options.emdashes
Type: `Boolean`
Default value: `true`

Should the parser replace emdashes, `--`, with their smart equivalent

#### options.ellipses
Type: `Boolean`
Default value: `true`

Should the parser replace ellipses with their smart equivalent

#### options.widows
Type: `Boolean`
Default value: `true`

Should the parser prevent widows using a non-breaking space.

#### options.custom_replacements
Type: `Array of Arrays`
Default value: `[]`

Custom replacements that should be applied to your html text. Should be
of the form `[/regex/g, 'replacement string']`.

### Usage Examples

#### Default Options
By default all the replacements will run on your html files, with
exception of custom replacements.

```js
grunt.initConfig({
  smarttext: {
    options: {},
    files: [{
      'expand': true,
      'cwd': 'test/fixtures',
      'src': ['**/*.html'],
      'dest': 'tmp'
    }],
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  smarttext: {
    options: {
      ellipses: false,
      widows: false,
    },
    files: [{
      'expand': true,
      'cwd': 'test/fixtures',
      'src': ['**/*.html'],
      'dest': 'tmp'
    }],
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* `0.1.0` - Initial release. Able to replace singlequotes, doublequotes, apostrophes, emdashes, ellipses, custom replacers, and prevent widows.
