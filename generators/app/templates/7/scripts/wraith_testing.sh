#!/usr/bin/env bash
  vagrant ssh -c "cd /var/www/<%=appName %>/wraith/; wraith capture capture"
