'use strict'

const gulp = require('gulp')
const stylus = require('gulp-stylus')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')

gulp.task('css', () => {
  var processors = [
    autoprefixer({ browsers: ['last 1 version'] }),
    cssnano()
  ]
  return gulp.src('source/stylus/*.styl')
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/css'))
})
