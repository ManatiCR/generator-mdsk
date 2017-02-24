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

### Wraith
In this generator we include Wraith for visual regression testing, to use it go to `wraith/configs/capture.yaml` and change the domains urls, the paths you want to test and the breakpoints if needed, then go back to the root path of your project and run:

```
./scripts/wraith_testing.sh
```
Once finished the execution of the script go to:

```
wraith/shots
```
And that's it, now you can make sure everything looks as expected just by opening the generated gallery in your browser.


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
node_modules/.bin/aquifer extensions-load
node_modules/.bin/aquifer build
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
