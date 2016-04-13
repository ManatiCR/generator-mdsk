# <%= humanName %>

<%= humanName %> Drupal Distribution

## Dependencies

* VirtualBox: 5.x
* Vagrant: 1.7.x
* Ansible (optional, but recommended): 1.9.x

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

Prepare the local site:

* `composer install`
* `npm install`
* `node_modules/.bin/aquifer extensions-load`
* `node_modules/.bin/aquifer build`

Prepare for local development:

* Visit http://editorconfig.org/ for instructions on how to configure your IDE or editor to use the included `.editorconfig` file.
* `cp example.config.yml config.yml`
* Edit config.yml and update the following:
    * Find and replace `drupalvm.dev` with `BRANDNAME.dev`
    * vagrant_machine_name: `BRANDNAME`
    * vagrant_ip: `0.0.0.0`
    * vagrant_synced_folders - local_path: `your-path` (modify as necessary)
    * vagrant_memory: `2048`
    * build_makefile: `false`
    * install_site: `false`
    * drupal_major_version: `8`
    * drupal_core_path: `/var/www/build`
    * drush_version: `master`
    * installed_extras:
      * `# - adminer`
      * `- mailhog`
      * `- memcached`
      * `# - nodejs`
      * `# - pimpmylog`
      * `# - ruby`
      * `- selenium`
      * `- solr`
      * `- varnish`
      * `# - xdebug`
      * `# - xhprof`
* [Mac/Linux only] Install Ansible Galaxy roles required for this VM: `sudo ansible-galaxy install -r provisioning/requirements.yml --force`

* `vagrant up`

Create local settings files:

* `./scripts/local_settings.sh`

Configure Solr search (adapted from
  [Solr for Drupal Developers](http://www.midwesternmac.com/blogs/jeff-geerling/solr-drupal-developers-part-3)):

* `./scripts/drupalvm_solr.sh`

Prepare the site:

* `./scripts/local_install.sh`

## Structure

**<%= humanName %> Distribution**

* `.gitignore`
* `/artifacts/` - Deployable build artifacts.
* `/build/` - Build working directory.
* `/docs` - Documentation for the distribution.
* `/files/` - User files.
* `/gulp-tasks` - Individual Gulp tasks.
* `/modules/custom` - Your custom modules.
* `/modules/features` - Your features.
* `/patches` - Drupal patches.
* `/provisioning` - Drupal VM Ansible playbooks.
* `/scripts` - Utilities.
* `/settings/settings.php` - Drupal common settings.
* `aquifer.json` - [Aquifer](https://github.com/aquifer/aquifer) build system configuration.
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
