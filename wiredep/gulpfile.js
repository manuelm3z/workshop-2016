var gulp = require('gulp')
  , wiredep = require('gulp-wiredep');
 
gulp.task('bower', function () {
    gulp.src('./source/index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./dist'));
});