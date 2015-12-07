var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');


gulp.task('default', function () {
    gulp.src('./router.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});