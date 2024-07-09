var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var stripCode = require('gulp-strip-code');
var browser = require('browser-sync').create();

// Task to compile and minify JavaScript
gulp.task("js", function () {
    return gulp
        .src(["js/**/*.js"])
        .pipe(rename(function (path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest("dist/js"));
});

// Task to minify JavaScript with optional code stripping
gulp.task("js-build", function () {
    return gulp
        .src(["js/**/*.js"])
        // Uncomment the following lines to strip code between start-log and end-log comments
        // .pipe(stripCode({
        //     start_comment: "start-log",
        //     end_comment: "end-log"
        // }))
        .pipe(
            minify({
                noSource: true,
                ext: {
                    min: ".min.js",
                },
            })
        )
        .pipe(gulp.dest("dist/js"));
});

// Task to compile Sass and minify CSS
gulp.task("sass", function () {
    return gulp
        .src("scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest("dist/css"));
});

// Task to initialize BrowserSync and watch for changes
gulp.task("browser", function () {
    browser.init({
        server: {
            baseDir: "./",
        },
    });
    gulp.watch("scss/*.scss", gulp.series("sass"));
    gulp.watch("js/**/*.js", gulp.series("js")).on('change', browser.reload);
    gulp.watch("*.html").on('change', browser.reload);
});

// Default task to run all tasks and initialize BrowserSync
gulp.task("default", gulp.series("sass", "js", "browser"));
