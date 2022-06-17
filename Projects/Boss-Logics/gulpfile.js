// ! IMPORTANT

// npm i gulp-sass
// npm i gulp-scss

// call command to compile your code
// gulp less
// gulp sass
// gulp scss

const gulp = require("gulp");
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

// compile file sass to css in folder > style
gulp.task("sass", function() {
    return gulp
        .src("./source/styles/sass/style.sass")
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(concat('./style.css'))
        .pipe(gulp.dest("./source/styles/test"));
});

// compile file scss to css in folder > style
// gulp.task("scss", function() {
//     return gulp
//         .src("./source/styles/scss/mobile.scss")
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest("./source/styles/mobile"));
// });