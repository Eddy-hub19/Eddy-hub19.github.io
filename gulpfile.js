const gulp = require("gulp");
const browserSync = require("browser-sync");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("server", function() {
    browserSync({
        server: {
            baseDir: "src",
        },
    });

    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("styles", function() {
    return gulp.src("less/style.less");
});

gulp.task("less", function() {
    return gulp
        .src("./less/style.less")
        .pipe(autoprefixer())
        .pipe(less())
        .pipe(gulp.dest("./src/css/test.css"));
});

gulp.task("watch", function() {
    gulp.watch("less/style.less", gulp.parallel("less"));
});

gulp.task("default", gulp.parallel("watch", "server", "less"));