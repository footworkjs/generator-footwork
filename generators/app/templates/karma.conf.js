// Karma configuration
// Generated on Mon Dec 14 2015 09:41:25 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery', 'jasmine', 'requirejs', 'fixture'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'public/app/config/require-config.js', nocache: true },
      'tests/include/test-main.js',
      'tests/include/footwork-test-helper.js',
      'tests/fixtures/**/*.html',
      'tests/fixtures/**/*.json',
      { pattern: 'public/images/**/*', included: false, watched: false, served: true },
      { pattern: 'tests/**/*.spec.js', included: false, nocache: true },
      { pattern: 'public/app/**/*.js', included: false, nocache: true },
      { pattern: 'public/app/**/*.html', included: false, served: true, nocache: true },
      { pattern: 'public/bower_components/footwork/{dist,build}/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/history.js/scripts/bundled/**/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/postal.js/lib/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/lodash/**/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/knockout/dist/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/reqwest/reqwest.js', watched: false, included: false },
      { pattern: 'public/bower_components/jquery/dist/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/requirejs/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/requirejs-text/*.js', watched: false, included: false },
      { pattern: 'public/bower_components/bootstrap/dist/**/*.js', watched: false, included: false },
      { pattern: 'node_modules/jquery-mockjax/dist/*.js', watched: false, included: false }
    ],

    // urls to proxy/map automatically
    proxies: {
      '/images/': '/base/public/images/'
    },


    // list of files to exclude
    exclude: [
      'public/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/**/*.html'   : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },


    // used by the fixture framework
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
