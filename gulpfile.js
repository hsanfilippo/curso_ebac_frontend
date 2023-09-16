const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compImg() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function compJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

function compSass() {
    return gulp.src('./source/styles/main.scss') // arquivos fonte
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); // onde salvar o arquivo compilado
}

function helloGulp(callback) {
    console.log("   ##### Hello, gulp! #####\n")
    callback();
}

exports.default = helloGulp; // = gulp
exports.compSass = compSass; // = sass
exports.compJS = compJS; // = uglify
exports.compImg = compImg; // = imagemin