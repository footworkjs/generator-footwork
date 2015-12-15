// Karma configuration
// Generated on Mon Dec 14 2015 09:41:25 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      'public/scripts/require-config.js',
      'tests/test-main.js',
      'tests/footwork-test-helper.js',
      'node_modules/jquery/dist/jquery.js',
      'tests/fixtures/**/*.html',
      {pattern: 'tests/**/*.spec.js', included: false},
      {pattern: 'public/scripts/**/*.js', included: false},
      {pattern: 'public/bower_components/**/*.js', included: false}
    ],


    // list of files to exclude
    exclude: [
      'public/scripts/app/main.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html'   : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },


    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
