let gulp = require('gulp'),
    importCss = require('gulp-import-css'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    config = require('../config');
    scss = require('gulp-sass');

gulp.task('libs', async () => {
  gulp.src(config.libs.scss)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    // .pipe(importCss())
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist.css));

  gulp.src(config.libs.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(babel())
    .pipe(include({
      extensions: "js",
      hardFail: true
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dist.js))
  });

gulp.task('libs:watch', () => {
  gulp.watch(config.libs.scss, gulp.parallel('libs'));
  gulp.watch(config.libs.js, gulp.parallel('libs'));
})