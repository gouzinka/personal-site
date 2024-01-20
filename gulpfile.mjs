import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rev from 'gulp-rev';

gulp.task('css', function () {
  return gulp.src('static/css/*.css')
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rev())
    .pipe(gulp.dest('output/styles'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('output/styles'));
});
