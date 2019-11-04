let gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    config = require('../config'),
    htmlmin = require('gulp-htmlmin'),
    fileinclude = require('gulp-file-include');

gulp.task('html', () => (
  gulp.src(config.src.html)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(config.dist.html))
));

gulp.task('html:watch', () => {
  gulp.watch(config.watch.html, gulp.parallel('html'));
})