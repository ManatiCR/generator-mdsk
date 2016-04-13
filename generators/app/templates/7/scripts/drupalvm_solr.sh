#!/usr/bin/env bash
vagrant ssh -c "curl http://ftp.drupal.org/files/projects/apachesolr-7.x-1.x-dev.tar.gz | tar -xz \
  && sudo cp -r apachesolr/solr-conf/solr-4.x/* /var/solr/collection1/conf/ \
  && sudo chown -R solr:solr /var/solr/collection1/conf/* \
  && sudo service solr restart"
