#!/usr/bin/env bash

read -p "This will create local settings files, are you sure you want to proceed?" -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Creating ./settings"
  mkdir -p settings

  if [ ! -f ./settings/settings.local.php ]; then
    echo "Creating ./settings/settings.local.php"
    printf "<?php\n/**\n * @file\n * Local development settings.\n */\n\n\$config['system.performance']['css']['preprocess'] = FALSE;\n\$config['system.performance']['js']['preprocess'] = FALSE;\n" > settings/settings.local.php
  fi

  if [ ! -f ./settings/settings.secret.php ]; then
    echo "Creating ./settings/settings.secret.php"
    printf "<?php\n/**\n * @file\n * Secret configuration settings for the site.\n */\n\n// Database.\n\$databases = array(\n  'default' => array(\n    'default' => array(\n      'database' => 'drupal',\n      'username' => 'drupal',\n      'password' => 'drupal',\n      'host' => 'localhost',\n      'driver' => 'mysql',\n    ),\n  ),\n);\n\n\$settings['hash_salt'] = 'local';\n" > settings/settings.secret.php
  fi
fi

echo "Complete.";
