#!/usr/bin/env bash
DRUSH="./vendor/bin/drush"
SITE_ALIAS="@<%= appName %>.<%= appName %>.dev"
$DRUSH $SITE_ALIAS cc drush
echo "Installing..."
if [ -f ./files/config/sync/core.extension.yml ] ; then $DRUSH $SITE_ALIAS si standard --config-dir=sites/default/files/config/sync --account-pass=admin -y ; else $DRUSH $SITE_ALIAS si standard --account-pass=admin -y ; fi
#echo "Setting master scope..."
#$DRUSH $SITE_ALIAS master-set-current-scope local
#echo "Executing master..."
#$DRUSH $SITE_ALIAS master-execute -y
echo "Importing config..."
$DRUSH $SITE_ALIAS ev '\Drupal::entityManager()->getStorage("shortcut_set")->load("default")->delete();'
$DRUSH $SITE_ALIAS cim -y
echo "Cleaning cache..."
$DRUSH $SITE_ALIAS cr
