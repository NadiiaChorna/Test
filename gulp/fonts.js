let gulp = require('gulp'),
    config = require('../config');

gulp.task('fonts', () => (
  gulp.src(config.src.fonts)
    .pipe(gulp.dest(config.dist.fonts))
));

gulp.task('fonts:watch', () => {
  gulp.watch(config.watch.fonts, gulp.parallel('fonts'))
});