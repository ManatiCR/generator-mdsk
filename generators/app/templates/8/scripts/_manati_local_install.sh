#!/usr/bin/env bash
DRUSH="./vendor/bin/drush"
SITE_ALIAS="@<%= dashedAppName %>.<%= dashedAppName %>.dev"
SITE_UUID="<%= siteUuid %>"
$DRUSH $SITE_ALIAS cc drush
echo "Installing..."
$DRUSH $SITE_ALIAS si <%= appName %> --account-pass=admin -y
echo "Set site uuid..."
$DRUSH $SITE_ALIAS config-set "system.site" uuid "$SITE_UUID" -y
echo "Importing config..."
if [ -f ./config/sync/core.extension.yml ] ; then $DRUSH $SITE_ALIAS cim -y ; fi
echo "Cleaning cache..."
$DRUSH $SITE_ALIAS cr
