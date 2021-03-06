const gulp = require('gulp')

const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const terser = require('gulp-terser')

module.exports = function scripts() {
    return gulp.src([
        './node_modules/svgxuse/svgxuse.js',
        './#src/scripts/memory-game.js',
        './#src/scripts/whack-a-mole.js',
        './#src/scripts/connect-four.js',
        './#src/scripts/snake.js',
        './#src/scripts/space-invaders.js',
        './#src/scripts/frogger.js',
        './#src/scripts/tetris.js',
        './#src/scripts/scripts.js',
        ])
        .pipe(concat('scripts.js'))
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(terser())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/scripts/'))
}
