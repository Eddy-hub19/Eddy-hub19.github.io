const gulp = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task("sass", function() {
    return gulp
        .src("./styles/sass/style.sass")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest("./styles/test"));
});