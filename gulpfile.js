require('require-dir')('./gulp', {recurse: true});

let gulp = require('gulp'),
    del = require('del');

gulp.task('export', gulp.parallel('scss', 'html', 'js', 'fonts', 'img', 'libs'));

gulp.task('clean', async () => (
  del.sync('dist')
));

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('watch', gulp.parallel(
  'scss:watch',
  'html:watch',
  'fonts:watch',
  'js:watch',
  'img:watch',
  'libs:watch'
  )
);

gulp.task('default', gulp.parallel('server', 'watch'));