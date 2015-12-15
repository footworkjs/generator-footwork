'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var _ = require('lodash');

function notate(thing, desc, color) {
  if(_.isUndefined(color)) {
    color = 'white';
  }
  console.log(chalk.bold[color](thing), desc || '');
}

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();

    console.log();
    this.log(yosay('Welcome to the ' + chalk.red('FootworkJS') + ' application scaffolding generator.'));
    console.log();

    var prompts = [{
      name: 'travisCI',
      message: 'Do you want to include travis.ci integration?',
      default: 'Yes',
      type: 'list',
      choices: ['Yes', 'No']
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    var includeTravisCI = this.props.travisCI === 'Yes';
    console.log();

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

    if(includeTravisCI) {
      notate('+ TravisCI', 'integration');
      this.fs.copy(
        this.templatePath('travis.yml'),
        this.destinationPath('.travis.yml')
      );
    } else {
      notate('- TravisCI', 'integration');
    }

    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('karma.conf.js'),
      this.destinationPath('karma.conf.js')
    );

    console.log();
  },

  install: function () {
    this.installDependencies();
  },

  end: function() {
    console.log();
    notate('Building the Javascript and CSS...');
    console.log();

    this.spawnCommandSync('gulp');

    console.log();
    notate('Thanks for trying out FootworkJS!');

    console.log();
    console.log('A few helpful commands while you are here:');
    console.log();

    notate('karma start', 'Start watching and running the unit tests');
    notate('gulp', '(Re)Compile the Javascript and CSS and exit');
    notate('gulp watch', 'Watch for changes and (Re)Compile the Javascript and CSS as needed');
    notate('gulp tests', 'Run the tests once and exit');
    notate('npm test', 'Run the tests once and exit');
    console.log();
  }
});
