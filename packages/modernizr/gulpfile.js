import fs from 'fs-extra';
import gulp from 'gulp';
import modernizr from 'modernizr';
import rev from 'gulp-rev';


gulp.task('generate', (done) => {
  modernizr.build({
    'feature-detects': [
      'es6/promises',
      'es6/arrow',
      'es6/rest-parameters',
      'es6/spread-array',
      'es7/spread-object',
    ],
  }, function(output) {
    fs.outputFile('dist/modernizr.js', output).then(() => {
      done();
    })
  });
});


gulp.task('rev', function () {
  return gulp
    .src([ './dist/modernizr.js' ])
    .pipe(rev())
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', gulp.series('generate', 'rev'));
