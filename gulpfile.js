var csso   = require('gulp-csso');
var gulp   = require('gulp');
var gulpif = require('gulp-if');
var less   = require('gulp-less');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var debug  = require('gulp-debug');

gulp.task('less', function () {
    return gulp
        .src('./less/style.less')
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('./css'))
    ;
});

gulp.task('assets', ['fonts', 'images']);

gulp.task('fonts', function () {
    return gulp.src(['node_modules/bootstrap/fonts/*', 'node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('build/fonts'))
        .pipe(gulp.dest('fonts'))
    ;
});

gulp.task('images', function () {
    return gulp.src(['img/*'])
        .pipe(gulp.dest('img'))
    ;
});

gulp.task('build', ['less', 'assets'], function () {
    return gulp.src('index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', csso()))
        .pipe(gulp.dest('build'))
    ;
});

gulp.task('default', ['build'], function () {
    
});

