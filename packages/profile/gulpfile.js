const gulp = require('gulp');
const header = require('gulp-header');
const rev = require('gulp-rev');
const pkg = require('./package.json');


gulp.task('default', function () {
  return gulp
    .src('./profile.min.js')
    .pipe(header('/* ' + pkg.name + ' ' + pkg.version + ' */\n'))
    .pipe(rev())
    .pipe(gulp.dest('./'));
});
