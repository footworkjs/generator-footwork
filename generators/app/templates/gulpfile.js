var gulp = require('gulp');
var _ = require('lodash');
var requirejsOptimize = require('gulp-requirejs-optimize');
var less = require('gulp-less');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var path = require('path');
var Server = require('karma').Server;
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

// Plumb all streams through gulp-plumber for error handling
var _gulpsrc = gulp.src;
gulp.src = function() {
  return _gulpsrc.apply(gulp, arguments)
    .pipe(plumber({
      errorHandler: function(error) {
        notify.onError({
          title: 'Gulp Error',
          message: 'Error: <%= error.message %>',
          sound: 'Bottle'
        })(error);
        this.emit('end');
      }
    }));
};

gulp.task('default', ['build-styles', 'build-js']);

gulp.task('build-js', function () {
  var requireConfig = require(__dirname + '/public/app/config/require-config.js');

  // Minification of KnockoutJS requires us to use the production/pre-compiled version in the build
  // See: https://github.com/knockout/knockout/issues/1894
  if(_.isObject(requireConfig.paths) && _.isString(requireConfig.paths.knockout)) {
    requireConfig.paths.knockout = requireConfig.paths.knockout.replace(/.debug$/, '');
  }

  return gulp.src('public/app/main.js')
    .pipe(sourcemaps.init())
    .pipe(requirejsOptimize(
      _.extend(requireConfig, {
        include: [ 'requireLib', 'text' ],
        baseUrl: 'public/app/',
        name: 'main',
        out: 'app.js',
        // optimize: 'none', // uncomment this line to disable minification
        wrap: {
          start: '(function() {',
          end: '}());'
        }
      })
    ))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('build-styles', function () {
  var LessPluginAutoPrefix = require('less-plugin-autoprefix');
  var LessPluginCleanCSS = require('less-plugin-clean-css');
  var autoprefix = new LessPluginAutoPrefix({ browsers: [ 'last 2 versions', '> 5%', 'ie 9', 'ie 10'] });
  var cleancss = new LessPluginCleanCSS({ advanced: true });

  return gulp.src('./public/styles/app.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [
        // base inclusion path for components
        path.join(__dirname, 'public', 'app', 'component')
      ],
      // cleancss bug is breaking the sourcemaps at the moment, hence it is disabled:
      // https://github.com/jakubpawlowicz/clean-css/issues/593
      plugins: [ autoprefix/*, cleancss*/ ]
     }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/build'));
});

gulp.task('watch', ['watch-styles', 'watch-js']);

gulp.task('watch-and-test', ['watch-styles', 'watch-js', 'watch-tests']);

gulp.task('watch-styles', function() {
  gulp.watch(['public/styles/**/*.less', 'public/app/component/**/*.less'], ['build-styles']);
});

gulp.task('watch-js', function () {
  gulp.watch(['public/app/**/*.js', 'public/app/**/*.html'], ['build-js']);
});

gulp.task('watch-tests', function () {
  gulp.watch(['public/app/**/*.js', 'public/app/**/*.html'], ['tests']);
});

gulp.task('tests', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('webserver', function () {
  gulp.src('public')
    .pipe(webserver({
      host: '0.0.0.0',
      // host: 'localhost',
      fallback: 'index.html',
      livereload: false,
      port: 8000,
      open: true
    }));
});
