// ! IMPORTANT

// npm i gulp-sass
// npm i gulp-scss

// call command to compile your code
// gulp less
// gulp sass
// gulp scss

const gulp = require("gulp")
// const less = require("gulp-less");
const concat = require("gulp-concat")
const sass = require("gulp-sass")(require("sass"))

// compile file scss to css in folder > style
gulp.task("scss", function () {
    return gulp
        .src("./src/styles/scss/media.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(concat("media.css"))
        .pipe(gulp.dest("./src/styles/css"))
})

// compile file sass to css in folder > style
gulp.task("sass", function () {
    return gulp
        .src("./src/styles/sass/style.sass")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(concat("./style.css"))
        .pipe(gulp.dest("./src/styles/css"))
})

gulp.task('watch', function(){
    gulp.watch('./src/styles/sass/**/*.sass', gulp.series('sass'));
    // gulp.watch('./src/styles/scss/**/*.scss', gulp.series('scss'));
});