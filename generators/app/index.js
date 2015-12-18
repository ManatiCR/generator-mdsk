'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('Manati Drupal Starter Kit') + ' generator!'
    ));

    var prompts = [{
      name: 'humanName',
      message: 'What\'s your app human name?',
      default: 'Manati'
    },{
      name: 'appName',
      message: 'What\'s your app machine name?',
      default: function(props) {
        return _.snakeCase(props.humanName)
      }
    },{
      type: 'confirm',
      name: 'confirm',
      message: 'Please confirm generation',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.props.humanName = props.humanName;
      this.props.appName = props.appName;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_aquifer.json'),
      this.destinationPath('aquifer.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_behat.yml'),
      this.destinationPath('behat.yml'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_circle.yml'),
      this.destinationPath('circle.yml'),
      this.props
    );
    this.fs.copy(
      this.templatePath('composer.json'),
      this.destinationPath('composer.json')
    );
    this.fs.copy(
      this.templatePath('composer.lock'),
      this.destinationPath('composer.lock')
    );
    this.fs.copy(
      this.templatePath('drupal.make.yml'),
      this.destinationPath('drupal.make.yml')
    );
    this.fs.copyTpl(
      this.templatePath('_example.config.yml'),
      this.destinationPath('config.yml'),
      this.props
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('_README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copy(
      this.templatePath('Vagrantfile'),
      this.destinationPath('Vagrantfile')
    );
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
