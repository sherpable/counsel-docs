# The configuration file

The Counsel behaviour is customisable with a custom configuration file. This file should be located within you project root and named `counsel.config.js`.

This is the base `counsel.config.js` file:

```js
module.exports = {
    reporter: './reporters/DotReporter',
	locations: [
		'tests',
	],
    patterns: [
        'Test.js$',
        'test.js$',
        'Test.yaml$',
        'test.yaml$',
    ],
    env: {
        'APP_ENV': 'testing',
    }
}
```

When you create a custom config file, this file will be merged with the default configuration. So you only need to override or add new items.

## Configuration items
Bellow you will find all available configuration items within the `counsel.config.js` file.

### reporter (string)
The path to a reporter class file

### locations (array)
The locations/folders where you tests files could be found.

### patterns (array)
Patterns that will be applied when filtering the test files.

### env (object)
Specify custom env items when running code within Counsel.

### vue (object)
Tell Counsel how to load you project Vue instance, could be something like this:
```js
vue: {
    require: () => {
        return require('vue');
    },
    referenceName: 'Vue'
},
```
The `referenceName` should be the same as name as you Vue window instance name. For example when you are registering Vue like this: ```js window.app = new Vue(); ```. You should make `referenceName` equal to `app`.

### bootstrap (string)
When you need to bootstrap something. Within this boostrap property you are able to reference a file that will be loaded before any test will be executed.

### suites (object)
Specify some custom suites. Those are basicaly a mapping with a `name` that will point to a `directory`. For example:
```js
suites: {
    all: 'tests',
    unit: 'tests/Unit',
    io: 'tests/IO',
    'vue-components': 'tests/VueComponents',
},
```

Now you are able to do this ```bash counsel --suite unit``` and it will only trigger any test within the folder `tests/Unit`.

### autoloadFiles (array)
When you need to load any custom file before running any test, within this propery you are able to specify a list of files that Counsel should load. For example:
```js
autoloadFiles: [
    'tests/ImportantFile.js',
],
```

### autoloadClasses (object)
When you need to load custom classes before running any test, within the propery you are able to specify the global name for the class as the key and the file path as the value. Those classes will be bind to the global object. For example:
```js
autoloadClasses: {
    MyClass: 'tests/MyClass.js',
},
```

This will become:
```js
global.MyClass = MyClass;
```

### instantiateClasses (object)
When you need to load and instantiate custom classes before running any test, within the propery you are able to specify the global name for the class as the key and the file path as the value. Those classes will be bind to the global object. For example:
```js
autoloadClasses: {
    MyInstantiatedClass: 'tests/MyInstantiatedClass.js',
},
```

This will become:
```js
global.MyInstantiatedClass = new MyInstantiatedClass;
```