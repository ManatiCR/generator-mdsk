/**
 * @file
 * Validate custom JavaScript with best practices and Drupal Coding Standards.
 */
/* eslint-env node */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var gulpif = require('gulp-if');

gulp.task('eslint', function () {
  'use strict';
  var sourcePatterns = [
    'gulpfile.js',
    'gulp-tasks/*.js',
    'modules/**/*.js',
    'themes/**/*.js'
  ];
  var writeOutput = argv.hasOwnProperty('outputfile');
  var wstream;
  if (writeOutput) {
    wstream = fs.createWriteStream(argv.outputfile + '/eslint.xml');
  }
  var result = gulp.src(sourcePatterns)
    .pipe(eslint({
      configFile: './.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(gulpif(writeOutput, eslint.format('junit', wstream)))
    .pipe(eslint.failAfterError());

  return result;
});
