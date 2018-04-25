var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var cssnano = require('cssnano');
var babel = require('gulp-babel');

gulp.task('sass', function () {
    gulp.src('assets/css/main.sass')
        .pipe(sass())
        .pipe(postcss(cssnano))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'assets'
        },
        files: 'assets/**/*'
    })
});

gulp.task('babel', function () {
    return gulp.src('assets/js/functions.js')
        .pipe(babel())
        .pipe(gulp.dest('assets/js'));
});


gulp.task('watch', function () {
    gulp.watch('assets/css/**/*.{scss,sass}', ['sass']);
    gulp.watch('assets/js/**/*', ['babel']);
    gulp.watch("assets/**/*").on('change', browserSync.reload);
    // Other watchers
})



