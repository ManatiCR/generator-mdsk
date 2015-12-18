/**
 * @file
 * Syntax check PHP files.
 */
/* eslint-env node */
/* eslint no-console:0 */

var gulp = require('gulp');
var phplint = require('phplint').lint;
var gutil = require('gulp-util');

gulp.task('phplint', function (cb) {
  'use strict';

  var extensions = '{php,module,inc,install,test,profile,theme}';
  var sourcePatterns = [
    'modules/**/*.' + extensions,
    'themes/**/*.' + extensions,
    'tests/behat/**/*.' + extensions,
    'settings/**/*.' + extensions
  ];
  var phpLintOptions = {
    limit: 50
  };

  phplint(sourcePatterns, phpLintOptions, function (err, stdout, stderr) {
    if (err) {
      throw new gutil.PluginError({
        plugin: 'phplint',
        message: err
      });
    }
    cb();
  });
});
