# Local Development

Local development is always a messy issue; disparities between host machines and environments, troubleshooting and maintenance, and new developer onboarding is problematic at best and often an inefficient use of time. Supporting an internally built system can be problematic as well. Therefore, an industry standard and well supported (and documented) solution is optimal.

## Drupal VM

[Drupal VM](http://www.drupalvm.com/) is a Virtual Machine for local Drupal development. It's open-source, well documented, and works very well.

* Homepage - http://www.drupalvm.com/
* GitHub - https://github.com/geerlingguy/drupal-vm
* Documentation - http://docs.drupalvm.com/en/latest/

Drupal VM uses the following open-source tools:

* Vagrant - https://www.vagrantup.com/
* VirtualBox - https://www.virtualbox.org/
* Ansible - http://www.ansible.com/

## Getting started

Follow the instructions in `README.md`.

## Updating

Drupal VM is continually improved by the maintainers and community. Due to the structure of Drupal VM's repository, these changes are not automatically included. Instead, a script has been developed that selectively copies the relevant files into the Distribution codebase.

```bash
./scripts/drupalvm.sh
```
