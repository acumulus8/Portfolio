const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


/////INDIVIDUAL TASKS/////
gulp.task('default', function() {
    console.log('This is the default gulp task!');
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('cssInject', ['sass'], function() {
    return gulp.src('./app/assets/styles/styles.scss')
        .pipe(browserSync.stream());
});


/////WATCH TASKS/////
gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/*.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.scss', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    })
})