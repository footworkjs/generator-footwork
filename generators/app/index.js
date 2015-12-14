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
    var done = this.async();

    this.log(chalk.red('FootworkJS') + ' application scaffolding generator');

    var prompts = [{
      name: 'publicFolder',
      message: 'What is the relative path to your public HTML folder?',
      default: 'public'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var publicFolder = this.props.publicFolder;
    var params = {
      subPathsToRootPub: _.repeat(('..' + path.sep), publicFolder.split(path.sep).length),
      publicFolder: publicFolder
    };

    this.log('Installing with public folder: ' + chalk.red(publicFolder));

    this.directory('scripts', path.join(publicFolder, 'scripts'));
    this.directory('css', path.join(publicFolder, 'css'));

    this.fs.copyTpl(
      this.templatePath('require-config.js'),
      this.destinationPath(path.join(publicFolder, 'scripts/require-config.js')),
      params
    );

    this.fs.copyTpl(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md'),
      params
    );

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(path.join(publicFolder, 'index.html'))
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );

    this.fs.copy(
      this.templatePath('bower.json'),
      this.destinationPath('bower.json')
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      params
    );

    this.fs.copyTpl(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc'),
      params
    );

    this.fs.copyTpl(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js'),
      params
    );

    this.fs.copy(this.templatePath('spec/tests.js'), this.destinationPath('spec/tests.js'));
    this.fs.copyTpl(
      this.templatePath('spec/test-loader.js'),
      this.destinationPath('spec/test-loader.js'),
      params
    );
    this.fs.copyTpl(
      this.templatePath('spec/runner.html'),
      this.destinationPath('spec/runner.html'),
      params
    );
  },

  install: function () {
    this.installDependencies();
  },

  end: function() {
    this.spawnCommandSync('gulp');
  }
});
