// Основной модуль
import gulp from "gulp";
// Ипорт путей
import { path } from "./gulp/config/path.js";

// Передаем значения в глобльаную переменную
global.app = {
    path: path,
    path: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";

// Выполнение сценария по умолчанию
gulp.task('default', copy)

// const gulp = require("gulp");
// const concat = require('gulp-concat');
// const sass = require('gulp-sass')(require('sass'));

// // compile file sass to css in folder > style
// gulp.task("sass", function() {
//     return gulp
//         .source("./source/styles/sass/style.sass")
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(concat('./style.css'))
//         .pipe(gulp.dest("./source/styles/test"));
// });