# <%= humanName %>

<%= humanName %> Drupal Distribution

## Dependencies

* VirtualBox: 5.x
* Vagrant: 1.7.x
* Ansible (optional, but recommended): >= 2.2.1.0
* [Ahoy] (https://github.com/ahoy-cli/ahoy/releases) (2.0.0-beta1) (Only for Deploy)

### Mac

```bash
brew cask install virtualbox
brew cask install vagrant
brew install ansible
```

### Vagrant

Two plugins are required.

```bash
vagrant plugin install vagrant-hostsupdater
vagrant plugin install vagrant-auto_network
```

## Getting started

### Prepare for local development:

##### Configure IDE
Visit http://editorconfig.org/ for instructions on how to configure your IDE or editor to use the included `.editorconfig` file.
##### Edit default.config.yml
`nano default.config.yml`

and update the following:
* vagrant_synced_folders - local_path: `your-path` (modify as necessary)

##### On Mac/Linux [only] Install Ansible Galaxy roles required for this VM:
`sudo ansible-galaxy install -r provisioning/requirements.yml --force`

## Lift vagrant
This process takes a while, so do it in a different terminal so
you can continue with the rest while this is running.

 `vagrant up`

## While vagrant is provisioning

### Prepare the site:

* Create local settings files and prepare the local site:
```
./scripts/local_settings.sh
composer install
npm install
```

```
npm run build-site
```

## Finally
Once vagrant has finished provisioning and you have prepared the site finally:
* Configure Solr search (adapted from [Solr for Drupal Developers](http://www.midwesternmac.com/blogs/jeff-geerling/solr-drupal-developers-part-3)) and prepare the site:
```
./scripts/<%= appName %>_local_install.sh`
./scripts/drupalvm_solr.sh
```

## Site UUID.
Site uuid can be found in the installation script. You should create a variable named `SITE_UUID` in wercker and set it to that value so that wercker builds work as expected.


## Backstop JS

This site provides this tool for visual regression testing, use it check if your changes affect your site styles or structure.

configuration file: `backstop.json`

this file contains all the configuration for our viewports, scenarios and the tool paths.

To check your site state edit the backstop.json as needed and run:

```bash
npm run backstop
```

## Structure

**<%= humanName %> Distribution**

* `.gitignore`
* `/artifacts/` - Deployable build artifacts.
* `/backstop_data/` - Contains the casper scripts for backstop JS and the is the destination of the test results.
* `/web/` - Build working directory.
* `/docs` - Documentation for the distribution.
* `/files/` - User files.
* `/gulp-tasks` - Individual Gulp tasks.
* `/modules/custom` - Your custom modules.
* `/modules/features` - Your features.
* `/patches` - Drupal patches.
* `/provisioning` - Drupal VM Ansible playbooks.
* `/scripts` - Utilities.
* `/settings/settings.php` - Drupal common settings.
* `composer.json` - [Composer](https://getcomposer.org) PHP dependency manager configuration.
* `composer.lock` - locks Composer to specific versions.
* `config.yml` - Drupal VM.
* `drupal.make.yml` - Defines Drupal, contrib projects and patches.
* `.editorconfig` - Defines and maintains consistent coding styles between different editors
* `.eslintrc` - JavaScript coding standards.
* `example.config.yml` - Drupal VM.
* `gulpfile.js` - [Gulp](http://gulpjs.com/) JavaScript task runner; use `gulp help` for details.
* `package.json` - Node.JS packages.
* `README.md`
* `Vagrantfile` - Drupal VM.
* `/settings/settings.secret.php` - Drupal environmental settings that should not be in version control, like passwords.
* `/settings/settings.local.php` - Drupal local development settings.

## Testing

Uses the [Drupal Extension](http://behat-drupal-extension.readthedocs.org/en/3.1/index.html) to Behat and Mink.

```bash
./scripts/local_behat.sh
```
