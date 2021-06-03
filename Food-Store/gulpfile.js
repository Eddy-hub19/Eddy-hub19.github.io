const gulp = require("gulp");
const less = require("gulp-less");
const concat = require('gulp-concat');

gulp.task("less", function() {
    return gulp
        .src("./style/less/style.less")
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest("./style/"));
});