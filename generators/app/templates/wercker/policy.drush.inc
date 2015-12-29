<?php

/**
 * @file
 * Policy drush.
 */

/**
 * Implements hook_drush_sitealias_alter().
 */
function policy_drush_sitealias_alter(&$alias_record) {
  // Fix pantheon aliases!
  if ( isset($alias_record['remote-host']) &&
      (substr($alias_record['remote-host'],0,10) == 'appserver.') ) {
    $alias_record['path-aliases']['%drush-script'] = 'drush8';
  }
}
