This is meant to be used as a base/example starting point for a FootworkJS web application. It includes several things pre-scaffolded and setup, including:

* Uses [Bower](http://bower.io/) for frontend dependencies
* Uses [Gulp](http://gulpjs.com/) for tasks
* Uses [RequireJS](http://requirejs.org/) + [text plugin](https://github.com/requirejs/text) (so Footwork can automatically load assets)
  * Includes r.js for optimization and includes example working build.js
* Uses phantomjs and expect for unit tests (tests located in /tests)
* Includes example viewModel, and component which are resolved and bootstrapped dynamically at run-time
* Includes Bootstrap3 via Bower

Files/directories of note:

* ```public/index.html``` - Main index HTML file
* ```public/scripts/main.js``` - Application main starting module
* ```public/scripts/app/assets.js``` - Footwork viewModel/component/etc asset registrations
* ```public/scripts/app/viewModel/ExampleViewModel.js``` - Example viewModel
* ```public/scripts/app/component/my-component``` - Example component
* ```public/scripts/require-config.js``` - RequireJS configuration

------

### Running this code/website

> *Note that steps 1 and 2 are not necessary if you installed via Yeoman.*

1) **Clone the repo from here:**

```bash
git clone git@github.com:footworkjs/skeleton-app.git
cd skeleton-app
```

2) **Acquire npm and bower (javascript) dependencies:**

Make sure you have [node.js](http://nodejs.org/) and [bower](http://bower.io/) installed in your environment, then run the following:

```bash
npm install && bower install
```

3) **Run the local webserver:** (if necessary)

If you are not running this on a pre-existing server which already has an HTTP provider (Apache, nginx, etc) then you will need to run the local webserver in order to view the application. First off, make sure you have [Gulp](http://gulpjs.com) installed, then run:

```bash
gulp webserver
```

You can now access the site at: [http://localhost:8000](http://localhost:8000) (or whatever host you have it running on, this assumes localhost)

### Running Unit Tests

The included test runner is [Karma](http://karma-runner.github.io/), to run the unit tests you can either:

Run them manually via Gulp:
```bash
# Run the unit tests under /tests
gulp tests
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

Run the ```watch-and-test``` task which compiles everything and runs the tests everytime a change is detected:
```bash
gulp watch-and-test
```

### Other Included Tasks

The ```gulpfile.js``` included in this repository has several runnable tasks included with it, they are as follows:

```bash
# (default task) Compile the LESS into CSS, and bundle/compile/optimize the javascript
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

```bash
# Compile the LESS into CSS
gulp build-css
```

```bash
# Bundle/optimize the javascript (the RequireJS config is located in public/scripts/require-config.js)
gulp build-js
```
