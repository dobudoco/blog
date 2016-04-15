'use strict'

const gulp = require('gulp')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const mqpacker = require('css-mqpacker')

gulp.task('css', () => {
  var processors = [
    cssnext({ browsers: ['last 1 version'] }),
    nested,
    mqpacker,
    cssnano()
  ]
  return gulp.src('source/styles/*.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('build/css'))
})
