'use strict'

const gulp = require('gulp')
const scss = require('postcss-scss')
const nested = require('postcss-nested')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')
const atImport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const mqpacker = require('css-mqpacker')

gulp.task('css', () => {
  var processors = [
    atImport,
    cssnext({ browsers: ['last 1 version'] }),
    nested,
    mqpacker,
    cssnano({ autoprefixer: false })
  ]
  return gulp.src('source/styles/main.css')
    .pipe(postcss(processors, { syntax: scss }))
    .pipe(gulp.dest('source/build/css'))
})

gulp.task('default', ['css'])
