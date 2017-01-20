'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var uuidV4 = require('uuid/v4');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);

    this.option('humanName', {
      desc: 'Application human name',
      type: 'String'
    });
    this.option('appName', {
      desc: 'Application machine name',
      type: 'String'
    });
    this.option('drupalVersion', {
      desc: 'Target drupal version',
      type: 'Number'
    });
  },
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('Manati Drupal Starter Kit') + ' generator!'
    ));

    var prompts = [];

    if (!this.options.humanName) {
      prompts.push({
        name: 'humanName',
        message: 'What\'s your app human name?',
        default: 'Manati'
      });
    }

    if (!this.options.appName) {
      prompts.push({
        name: 'appName',
        message: 'What\'s your app machine name?',
        default: function (props) {
          return _.snakeCase(props.humanName);
        }
      });
    }

    if (!this.options.drupalVersion) {
      prompts.push({
        name: 'version',
        message: 'Drupal Version?',
        type: 'list',
        choices: [
        {
          name: '7',
          value: '7'
        },
        {
          name: '8',
          value: '8'
        }
      ],
        default: 7
      });
    }

    this.prompt(prompts, function (props) {
      this.props = {};
      // To access props later use this.props.someOption;
      this.props.humanName = props.humanName ? props.humanName : this.options.humanName;
      this.props.appName = props.appName ? props.appName : this.options.appName;
      this.props.dashedAppName = this.props.appName.replace('_', '-');
      this.props.version = props.version ? props.version : this.options.drupalVersion;

      if (this.props.version == '8') {
        this.props.siteUuid = uuidV4();
      }

      done();
    }.bind(this));
  },

  writing: {
    rootFiles: function () {
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_aquifer.json'),
        this.destinationPath('aquifer.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_behat.yml'),
        this.destinationPath('behat.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_circle.yml'),
        this.destinationPath('circle.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_wercker.yml'),
        this.destinationPath('wercker.yml'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'composer.json'),
        this.destinationPath('composer.json')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'drupal.make.yml'),
        this.destinationPath('drupal.make.yml')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_example.config.yml'),
        this.destinationPath('default.config.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_example.config.yml'),
        this.destinationPath('example.config.yml'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + '_README.md'),
        this.destinationPath('README.md'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'Vagrantfile'),
        this.destinationPath('Vagrantfile')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'gitattributes'),
        this.destinationPath('.gitattributes')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'gitignore'),
        this.destinationPath('.gitignore')
      );
    },
    projectFolders: function () {
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'artifacts/gitkeep'),
        this.destinationPath('artifacts/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'build/gitkeep'),
        this.destinationPath('build/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'files/gitkeep'),
        this.destinationPath('files/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'patches/gitkeep'),
        this.destinationPath('patches/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'root/gitkeep'),
        this.destinationPath('root/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'root/htaccess'),
        this.destinationPath('root/.htaccess')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'root/gitignore'),
        this.destinationPath('root/.gitignore')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'modules/custom/gitkeep'),
        this.destinationPath('modules/custom/.gitkeep')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'modules/features/gitkeep'),
        this.destinationPath('modules/features/.gitkeep')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'circle'),
        this.destinationPath('circle'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'drush'),
        this.destinationPath('drush')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'wercker'),
        this.destinationPath('wercker'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'docs'),
        this.destinationPath('docs'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'gulp-tasks'),
        this.destinationPath('gulp-tasks')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'post-provision'),
        this.destinationPath('post-provision')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'profiles/manati'),
        this.destinationPath('profiles/' + this.props.appName),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'provisioning'),
        this.destinationPath('provisioning')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'scripts'),
        this.destinationPath('scripts'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'settings'),
        this.destinationPath('settings'),
        this.props
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'tests'),
        this.destinationPath('tests')
      );
      this.fs.copy(
        this.templatePath(this.props.version + '/' + 'themes/custom/gitkeep'),
        this.destinationPath('themes/custom/.gitkeep')
      );
      this.fs.copyTpl(
        this.templatePath(this.props.version + '/' + 'wraith'),
        this.destinationPath('wraith'),
        this.props
      );
      if (this.props.version == 8) {
        this.fs.copyTpl(
          this.templatePath(this.props.version + '/' + 'files/config/sync'),
          this.destinationPath('files/config/sync'),
          this.props
        );
      }
    },
    renameFilesAndFolders: function () {
      this.fs.move('circle/_manati', 'circle/' + this.props.appName);
      this.fs.move('circle/_manati.aliases.drushrc.php', 'circle/' + this.props.appName+'.aliases.drushrc.php');
      this.fs.move('wraith/configs/_capture.yaml', 'wraith/configs/capture.yaml');

      this.fs.move('wercker/_manati.dev.conf', 'wercker/' + this.props.appName+'.dev.conf');
      this.fs.move('wercker/_manati.aliases.drushrc.php', 'wercker/' + this.props.appName + '.aliases.drushrc.php');

      this.fs.move('docs/_build.md', 'docs/build.md');

      this.fs.move('profiles/' + this.props.appName + '/_manati.install', 'profiles/' + this.props.appName + '/' + this.props.appName + '.install');

      this.fs.move('scripts/_manati_local_features_test.sh', 'scripts/' + this.props.appName + '_local_features_test.sh');
      this.fs.move('scripts/_manati_local_install.sh', 'scripts/' + this.props.appName + '_local_install.sh');

      if (this.props.version == 7) {
        this.fs.move('profiles/' + this.props.appName + '/_manati.info', 'profiles/' + this.props.appName+'/' + this.props.appName + '.info');
        this.fs.move('profiles/' + this.props.appName + '/_manati.profile', 'profiles/' + this.props.appName + '/' + this.props.appName + '.profile');
      }
      else if (this.props.version == 8) {
        this.fs.move('profiles/' + this.props.appName + '/_manati.info.yml', 'profiles/' + this.props.appName+'/' + this.props.appName + '.info.yml');
        this.fs.move('files/config/sync/htaccess', 'files/config/sync/.htaccess');
      }
    }

  },

  install: function () {
    if (!this.options.skipInstall) {
      this.npmInstall();
      this.spawnCommand('composer', ['install']);
    } else {
      this.log('Run npm install && composer install to start working');
    }
  }
});
