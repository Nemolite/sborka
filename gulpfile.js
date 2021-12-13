const { src, dest, parallel, series, watch } = require('gulp');

const gulp = require('gulp');
const sass = require('gulp-sass');
const bSync = require('browser-sync').create();
//const plus = require('gulp-concat');
//const compress = require('gulp-uglify-es').default;

	 /*
    function bsync() {
        bSync.init({ 
            server: { baseDir: './' }, 
            notify: true, 
            online: true 
        })
    }
    exports.bsync = bsync;

   
	function mainscripts() {
        return src([           
            'js/main.js', 
            ])
        .pipe(plus('main.min.js')) 
        .pipe(compress()) 
        .pipe(dest('js/')) 
        .pipe(bSync.stream()) 
    }  
    
    exports.mainscripts = mainscripts;
    */ 
       
    function style() {        
        return gulp.src('sass/main.sass')      
        .pipe(sass().on('error',sass.logError))        
        .pipe(gulp.dest('css'))        
        .pipe(bSync.stream());
    }
    exports.style = style;
    
    function swatch() {
        bSync.init({
            server: {
                baseDir: "./",
                index: "/index.html"
            }
        });
        gulp.watch('scss/main.sass', style);
        gulp.watch('./index.html').on('change',bSync.reload);
        // gulp.watch('./js/main.js').on('change', bSync.reload);
    }
    
   
    exports.watch = swatch;


    /*Еще один вариант*/

/*
    const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('sass/main.sass')     
    .pipe(sass().on('error',sass.logError))    
    .pipe(gulp.dest('css'))    
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/index.html"
        }
    });
    gulp.watch('sass/main.sass', style);
    gulp.watch('./index.html').on('change',browserSync.reload);
    gulp.watch('./js/main.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
*/

