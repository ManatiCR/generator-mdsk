# generator-mdsk [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![NPM Info][nodei-image]][nodei-url]
> Manati Drupal Starter Kit Generator

## What's in the box?

Using this generator; you'll get a folder with the below listed structure ready to start working with Drupal using modern and cool technologies like [drupalvm](https://github.com/geerlingguy/drupal-vm/), [behat](https://github.com/Behat/Behat) (using selenium for running JS tests), [gulp](https://github.com/gulpjs/gulp), [aquifer](https://github.com/aquifer/aquifer), [vagrant](http://vagrantup.com/), [ansible](https://github.com/ansible/ansible/) and more.

Out of the box; you'll get the necessary stuff for building your Drupal site using aquifer, using a virtual machine (created with vagrant and provisioned with ansible); with useful tools to check code quality (eslint, phplint, drupalcs) and some scripts for day-to-day tasks (generate settings, install site, run behat, verify features status).

Besides that; you'll get a [Wercker](http://wercker.com/) config file ready to create a wercker app the with necessary build steps and [Pantheon](http://pantheon.io/) deploy. You'll also get the same (but *untested*) for [CircleCI](http://circleci.com/) (without the Pantheon deploy stuff).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-mdsk using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-mdsk
```

Then generate your new project:

```bash
yo mdsk
```
## Folder Structure

Once generated your project; you'll get an structure like this:

* `.gitignore` - gitignore general file
* `/artifacts/` - Deployable build artifacts.
* `/build/` - Build working directory.
* `/docs` - Documentation for the distribution.
* `/files/` - User files.
* `/gulp-tasks` - Individual Gulp tasks.
* `/modules/custom` - Your custom modules.
* `/modules/features` - Your features.
* `/patches` - Drupal patches.
* `/provisioning` - Drupal VM Ansible playbooks.
* `/scripts` - Utility scripts.
* `/settings/settings.php` - Drupal common settings.
* `aquifer.json` - [Aquifer](https://github.com/aquifer/aquifer) build system configuration.
* `behat.yml` - [Behat](https://github.com/Behat/Behat) config file.
* `composer.json` - [Composer](https://getcomposer.org) PHP dependency manager configuration.
* `composer.lock` - locks Composer to specific versions.
* `config.yml` - Drupal VM.
* `drupal.make.yml` - Defines Drupal, contrib projects and patches.
* `.editorconfig` - Defines and maintains consistent coding styles between different editors
* `.eslintrc` - JavaScript coding standards.
* `example.config.yml` - Drupal VM. 
* `config.yml` - Same as example.config.yml that you can/should edit to your settings.
* `gulpfile.js` - [Gulp](http://gulpjs.com/) JavaScript task runner; use `gulp help` for details.
* `package.json` - Node.JS packages.
* `README.md` - Basic info and description file.
* `Vagrantfile` - Drupal VM. 
* `/settings/settings.secret.php` - Drupal environmental settings that should not be in version control, like passwords.
* `/settings/settings.local.php` - Drupal local development settings.
* `/tests/behat/features` - Behat features folder.
* `/tests/sample_content` - Sample content folder to use in your Behat features.
* `circle.yml` - [CircleCI](http://circleci.com/) config file.
* `/circle` - [CircleCI](http://circleci.com/) necessary files.
* `wercker.yml` - [Wercker](http://wercker.com/) config file.
* `/wercker` - [Wercker](http://wercker.com/) necessary files.
* `/node_modules` - Node contrib packages.
* `/.vendor` - Composer contrib packages.

## Usage

For usage instructions; please refer to: [USAGE.md](USAGE.md)

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## Credits

This generator has been possible thanks to all the great projects mentioned above. We also want to give special thanks to [@fluxsauce](https://github.com/fluxsauce) (and [@fourkitchens](http://github.com/fourkitchens/)) for his help and guidance and the folder structure in which this project is inspired.

## License

Apache-2.0 © [Manati](http:/www.estudiomanati.com)


[npm-image]: https://badge.fury.io/js/generator-mdsk.svg
[npm-url]: https://npmjs.org/package/generator-mdsk
[travis-image]: https://api.travis-ci.org/ManatiCR/generator-mdsk.svg?branch=master
[travis-url]: https://travis-ci.org/ManatiCR/generator-mdsk
[daviddm-image]: https://david-dm.org/manaticr/generator-mdsk.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/manaticr/generator-mdsk
[nodei-url]: https://nodei.co/npm/generator-mdsk/
[nodei-image]: https://nodei.co/npm/generator-mdsk.png?downloads=true&downloadRank=true&stars=true
