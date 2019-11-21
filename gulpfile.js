

const {series, parallel ,watch, src, dest} = require('gulp');
const    browserSync = require('browser-sync').create();
const    clean  = require('gulp-clean');
const    sass    = require('gulp-sass');
const    cleanCSS = require('gulp-clean-css');
const    concat  = require('gulp-concat');
const    babel = require('gulp-babel');
const    uglify  = require('gulp-uglify');
const    rigger  = require('gulp-rigger');
const    sourcemaps  = require('gulp-sourcemaps');

var paths = {
    lib: {
        js: {
            jquery: 'node_modules/jquery/dist/jquery.min.js',
            bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min.js'
        },
        css : {
            bootstrap: 'node_modules/bootstrap/dist/css/bootstrap.min.css'
        }
    },
    styles: {
        src: "src/sass/*.scss",
        build: "build/css"
    },
    html: {
        src: "src/*.html",
        build: "build/"
    },
    js: {
        src: "src/js",
        build: "build/js"
    },
    img: {
        src: "src/img/*",
        build: "build/img"
    }
};

function del() {
    return src('build/', {read: false, allowEmpty: true})
        .pipe(clean());
}
function copy(done) {
    src('src/*.ico')
    .pipe(dest('build/'));
    src(paths.lib.css.bootstrap)
    .pipe(dest(paths.styles.build));
    done();
}
function images(done) {
    src(paths.img.src)
    .pipe(dest(paths.img.build));
    done();
}
function style() {
    return src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(dest(paths.styles.build))
        .pipe(browserSync.stream());
}
function html(done) {
     src(paths.html.src)
        .pipe(rigger())
        .pipe(dest(paths.html.build));
    browserSync.reload();
    done();
}
function scripts() {
    return src([paths.lib.js.jquery, paths.lib.js.bootstrap,  'src/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest(paths.js.build));
}   
function watching () {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
    watch(paths.styles.src, style);
    watch(paths.html.src, html);
    watch(paths.js.src, scripts);
    watch(paths.img.src, images);
}

exports.style = style;
exports.watching = watching;

exports.default = series(del, parallel(style,html,scripts, images, copy), watching);