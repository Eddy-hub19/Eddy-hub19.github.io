const gulp = require("gulp");
const less = require("gulp-less");
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task("less", function() {
    return gulp
        .src("./style/less/style.less")
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest("./style/"));
});

gulp.task("scss", function() {
    return gulp
        .src("./style/scss/style.scss")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest("./style/"));
});