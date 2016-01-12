> Manati Drupal Starter Kit Generator

## How to use the generated project?

### Dependencies

* VirtualBox
* Vagrant
* Ansible

### Vagrant

Two plugins are required:

```bash
vagrant plugin install vagrant-hostsupdater
vagrant plugin install vagrant-auto_network
```

### Getting Started

Prepare for local development:

Once generated the project you get a git-untracked config.yml file (cloned from example.config.yml); you should make your changes to this file so that it's adapted to your needs. Remember to update the path to actual repo in `local_path` inside `vagrant_synced_folders` section. Other possible changes to that file are documented in generated project README.md file.

You also need to install ansible galaxy roles required for this VM:

```bash
sudo ansible-galaxy install -r provisioning/requirements.yml --force
```

Then, you could start the vagrant magic by running:

```bash
vagrant up
```

Once generated and provisioned your vm; you should prepare your local site.

Prepare the local site:

```bash
composer install
npm install
node_modules/.bin/aquifer extensions-load
node_modules/.bin/aquifer build
```

Generate local settings file:

```bash
./scripts/local_settings.sh
```

Install the local site

```bash
./scripts/<your_app>_local_install.sh
```

In order to run behat tests; you should execute:

```bash
./scripts/local_behat.sh
```
