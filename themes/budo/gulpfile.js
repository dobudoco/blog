'use strict'

const gulp = require('gulp')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const mqpacker = require('css-mqpacker')
const autoprefixer = require('autoprefixer')

gulp.task('css', () => {
  var processors = [
    autoprefixer({ browsers: ['last 1 version'] }),
    cssnext({ browsers: ['last 1 version'] }),
    mqpacker,
    cssnano()
  ]
  return gulp.src('source/stylus/*.styl')
    .pipe(postcss(processors))
    .pipe(gulp.dest('build/css'))
})
