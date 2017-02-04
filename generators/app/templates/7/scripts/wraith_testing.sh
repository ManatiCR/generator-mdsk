#!/usr/bin/env bash
  vagrant ssh -c "cd .gem/ruby/2.3.0/gems/wraith-4.0.1/bin; ./wraith capture /var/www/<%=appName %>/wraith/configs/capture.yaml"
