#!/usr/bin/env bash
  vagrant ssh -c "cd /var/www/<%=appName %>/wraith/configs; wraith capture capture "
