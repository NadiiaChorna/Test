let gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: 'dist/',
      index: 'index.min.html'
    },
    files: ['dist/**/*.*']
  })
})