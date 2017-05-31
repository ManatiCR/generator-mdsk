#!/usr/bin/env bash
if [ $# -ne 0 ]
  then
    vagrant ssh -c "cd /var/www/<%= appName %>; ./vendor/bin/drupal $1"
else
  echo "You need to pass the drupal console commands\n"
  vagrant ssh -c "cd /var/www/<%= appName %>; ./vendor/bin/drupal list"
fi
