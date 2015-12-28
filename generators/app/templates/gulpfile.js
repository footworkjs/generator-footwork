var gulp = require('gulp');
var rjs = require('requirejs');
var _ = require('lodash');
var less = require('gulp-less');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var path = require('path');
var Server = require('karma').Server;
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

// Plumb all streams through gulp-plumber for error handling
var _gulpsrc = gulp.src;
gulp.src = function() {
  return _gulpsrc.apply(gulp, arguments)
    .pipe(plumber({
      errorHandler: function(error) {
        notify.onError({
          title: "Gulp Error",
          message: "Error: <%= error.message %>",
          sound: "Bottle"
        })(error);
        this.emit('end');
      }
    }));
};

gulp.task('default', ['build-css', 'build-js']);

gulp.task('build-js', function () {
  var requireConfig = require(__dirname + '/public/app/require-config.js');

  // Minification of KnockoutJS requires us to use the production/pre-compiled version in the build
  // See: https://github.com/knockout/knockout/issues/1894
  if(_.isObject(requireConfig.paths) && _.isString(requireConfig.paths.knockout)) {
    requireConfig.paths.knockout = requireConfig.paths.knockout.replace(/.debug$/, '');
  }

  return rjs.optimize(_.extend(requireConfig, {
    include: [ 'requireLib', 'text' ],
    baseUrl: 'public/app/',
    name: 'main',
    mainConfigFile: 'public/app/main.js',
    out: 'public/app.js',
    wrap: {
      start: "(function() {",
      end: "}());"
    }
  }));
});

gulp.task('build-css', function () {
  return gulp.src('./public/css/app.less')
    .pipe(less({
      paths: [
        // base inclusion path for components
        path.join(__dirname, 'public', 'app', 'component')
      ]
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', ['watch-css', 'watch-js']);

gulp.task('watch-and-test', ['watch-css', 'watch-js', 'watch-tests']);

gulp.task('watch-css', function() {
  gulp.watch('public/css/**/*.less', ['build-css']);
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
