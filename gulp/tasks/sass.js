const gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./app/assets/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer({browsers: ['last 3 versions'], cascade: false}))
        .pipe(gulp.dest('./app/temp/styles'));
});