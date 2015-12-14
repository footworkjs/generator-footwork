# generator-footwork [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[FootworkJS](http://footworkjs.com) skeleton application generator.

For more info please visit the official site: http://footworkjs.com

## Installation

1. Verify that Yeoman is installed

  ```shell
  npm install -g yo
  ```
2. Install this generator

  ```shell
  npm install -g generator-footwork
  ```

3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [Bower](http://bower.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g bower
  ```

5. Create a new project folder and move into it in the terminal

  ```shell
  mkdir YOUR_PROJECT_NAME
  cd YOUR_PROJECT_NAME
  ```

6. Execute the following command

  ```shell
  yo footwork
  ```

## Building the CSS and JS and/or watching for changes

Out of the box, this application will not require the javascript to be re-built every time you change it because it loads them by default in their uncombined forms. The CSS however needs to be recompiled after each change. To build these do one of the following:

```shell
# Compile the LESS code into CSS (outputs to css/app.css)
gulp build-css
```

```shell
# Compile and minify the JS code (outputs to scripts/main-build.js)
gulp build-js
```

```shell
# Do both CSS and JS compilations (the default task)
gulp
```

```bash
# Watch the CSS and Javascript files for changes and recompile as needed
gulp watch
```

```bash
# Watch the CSS files for changes and recompile as needed
gulp watch-css
```

```bash
# Watch the Javascript files for changes and recompile as needed
gulp watch-js
```

## Running this application

If you do not have a webserver ready to host this application, then you can use the included static file server. To run that do the following:

```shell
gulp webserver
```

### Running Unit Tests

The included test runner is [Karma](http://karma-runner.github.io/), to run the unit tests you can either:

Run them manually via Gulp:
```bash
# Run the unit tests under /tests
gulp tests
```

Run them automatically with a watch task which runs the tests everytime a change is detected:
```bash
gulp watch-tests
```

Run them automatically with a watch task which compiles everything and runs the tests everytime a change is detected:
```bash
# Watch the CSS and Javascript files for changes and recompile the assets as needed
gulp watch-and-test
```

Run them via Karma directly. Note that you need to have Karma CLI installed:
```bash
# If you need to install Karma CLI, use the following command
npm install -g karma-cli
```

```bash
# Once Karma CLI is installed, you can run the tests with:
karma start
```

You can now access the site at: [http://localhost:8000](http://localhost:8000) (or whatever host you have it running on, this assumes localhost)

## License

MIT © [Jonathan Newman](http://staticty.pe)


[npm-image]: https://badge.fury.io/js/generator-footwork.svg
[npm-url]: https://npmjs.org/package/generator-footwork
[travis-image]: https://travis-ci.org/footworkjs/generator-footwork.svg?branch=master
[travis-url]: https://travis-ci.org/footworkjs/generator-footwork
[daviddm-image]: https://david-dm.org/footworkjs/generator-footwork.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/footworkjs/generator-footwork
