#!/usr/bin/env bash
vagrant ssh -c "wget -qO- http://ftp.drupal.org/files/projects/search_api_solr-8.x-1.x-dev.tar.gz | tar -xz \
  && sudo cp -r search_api_solr/solr-conf/4.x/* /var/solr/collection1/conf/ \
  && sudo chown -R solr:solr /var/solr/collection1/conf/* \
  && sudo /etc/init.d/solr restart"
