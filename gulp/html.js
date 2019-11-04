let gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    config = require('../config'),
    fileinclude = require('gulp-file-include');
    replace = require('gulp-replace-image-src');

gulp.task('html', () => (
  gulp.src(config.src.html)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(replace({
      prependSrc : 'img/',
      keepOrigin : false
    }))
    .pipe(gulp.dest(config.dist.html))
));

gulp.task('html:watch', () => {
  gulp.watch(config.watch.html, gulp.parallel('html'));
})