let gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    babel = require('gulp-babel'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    config = require('../config');

gulp.task('js', () => (
  gulp.src(config.src.js)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(babel())
    .pipe(include({
      extensions: "js",
      hardFail: true
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.js))
));

gulp.task('js:watch', () => {
  gulp.watch(config.watch.js, gulp.parallel('js'));
})