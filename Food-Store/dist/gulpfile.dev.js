"use strict";

var gulp = require("gulp");

var less = require("gulp-less");

var concat = require('gulp-concat');

gulp.task("less", function () {
  return gulp.src("./style/less/style.less").pipe(less()).pipe(concat('styleseses.css')).pipe(gulp.dest("./style/css"));
});