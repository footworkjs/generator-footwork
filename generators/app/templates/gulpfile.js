var gulp = require('gulp');
var rjs = require('requirejs');
var _ = require('lodash');
var less = require('gulp-less');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var path = require('path');

gulp.task('default', ['build-css', 'build-js']);

gulp.task('build-js', function() {
  var requireConfig = require(__dirname + '/<%= publicFolder %>/scripts/require-config.js');

  return rjs.optimize(_.extend(requireConfig, {
    include: [ 'requireLib', 'text' ],
    baseUrl: '<%= publicFolder %>/scripts/',
    name: 'app/main',
    mainConfigFile: '<%= publicFolder %>/scripts/app/main.js',
    out: '<%= publicFolder %>/scripts/main-build.js',
    wrap: {
      start: "(function() {",
      end: "}());"
    }
  }));
});

gulp.task('build-css', function() {
  return gulp.src('./<%= publicFolder %>/css/app.less')
    .pipe(less({
      paths: [
        // base inclusion path for component
        path.join(__dirname, '<%= publicFolder %>', 'scripts', 'app', 'component')
      ]
    }))
    .pipe(gulp.dest('./<%= publicFolder %>/css'));
});

gulp.task('watch', ['watch-css', 'watch-js']);

gulp.task('watch-css', function() {
  gulp.watch('<%= publicFolder %>/**/*.less', ['build-css']);
});

gulp.task('watch-js', function() {
  gulp.watch(['<%= publicFolder %>/scripts/app/**/*.js', '<%= publicFolder %>/scripts/require-config.js'], ['build-js']);
});

gulp.task('webserver', function() {
  gulp.src('<%= publicFolder %>')
    .pipe(webserver({
      host: '0.0.0.0',
      // host: 'localhost',
      fallback: 'index.html',
      livereload: false,
      port: 8000,
      open: true
    }));
});

gulp.task('tests', function() {
  return gulp
    .src('spec/runner.html')
    .pipe(mochaPhantomJS({ reporter: 'list' }));
});
