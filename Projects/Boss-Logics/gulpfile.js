const gulp = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));


gulp.task("sass", function() {
    return gulp
        .src("./source/styles/sass/style.sass")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('./style.css'))
        .pipe(gulp.dest("./source/styles/test"));
});