const gulp = require('gulp'),
watch = require('gulp-watch');

/////INDIVIDUAL TASKS/////
gulp.task('default', function() {
    console.log('This is the default gulp task!');
});

gulp.task('styles', function() {
    console.log('css is working');
});

/////WATCH TASKS/////
gulp.task('watch', function() {
    
    watch('./app/*.html', function() {
        
    });

    watch('./app/assets/styles/**/*.scss', function() {
        gulp.start('sass');
    });
})