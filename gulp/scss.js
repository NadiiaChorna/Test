let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    config = require('../config'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () => (
  gulp.src(config.src.scss)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init())
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist.css))
));

gulp.task('scss:watch', () => {
  gulp.watch(config.watch.scss, gulp.parallel('scss'));
});