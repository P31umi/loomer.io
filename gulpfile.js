var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    gulp.src('assets/base/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'assets'
        },
    })
})

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('assets/css/**/*.scss', ['sass']);
    // Other watchers
})



