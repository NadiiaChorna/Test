let gulp = require('gulp'),
    config = require('../config');

gulp.task('img', () => (
  gulp.src(config.src.img)
    .pipe(gulp.dest(config.dist.img))
));

gulp.task('img:watch', () => {
  gulp.watch(config.src.img, gulp.parallel('img'));
})