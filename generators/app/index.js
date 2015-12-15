'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    // var done = this.async();

    this.log(chalk.red('FootworkJS') + ' application scaffolding generator.');
  },

  writing: function () {
    this.directory('public', 'public');
    this.directory('tests', 'tests');

    this.fs.copy(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md')
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );

    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );
  },

  install: function () {
    this.installDependencies();
  },

  end: function() {
    this.spawnCommandSync('gulp');
  }
});
