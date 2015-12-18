<?php
/**
 * @file
 * Default form values.
 */

/**
 * Implements hook_form_FORM_ID_alter().
 */
function <%= appName %>_form_install_configure_form_alter(&$form, $form_state) {
  $form['site_information']['site_name']['#default_value'] = '<%= humanName %>';
  $form['site_information']['site_mail']['#default_value'] = 'ops@estudiomanati.com';
  $form['admin_account']['account']['name']['#default_value'] = 'admin';
  $form['admin_account']['account']['mail']['#default_value'] = 'ops@estudiomanati.com';
  // Disable automatic update checks.
  $form['update_notifications']['update_status_module']['#default_value'] = array();
}
