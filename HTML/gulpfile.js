// import { debug } from 'util';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    // concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer');


    // нужно установить еще  полезные плагины:)
    // gulp-debug
    // gulp-sourcemaps





     
gulp.task('imgmin', () =>
    gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);



gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "src"
        },
        notify:false
    });
});


gulp.task('sass', function() {
    return gulp.src('HTML/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('HTML/css'))
        .pipe(browserSync.reload({stream:true}))
});



gulp.task('sass2', function() {
    return gulp.src('HTML/sass/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('HTML/css'))
        .pipe(browserSync.reload({stream:true}))
});


gulp.task('sass3', function() {
    return gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/prefix'))
        .pipe(browserSync.reload({stream:true}))
});
    

gulp.task('sassDuqus', function() {
    return gulp.src('src/css/prefix/*.css')
        .pipe(gulp.dest('../css/'))
        .pipe(browserSync.reload({stream:true}))
});
    


// Следить за изменениями в sass
// gulp.task('sass:watch', function() {
// gulp.watch('HTML/sass/*.sass', ['sass']);
// });



// gulp.task('concat', function () {
//     return gulp.src('HTML/css/*.css')
//       .pipe(concatCss("styles/bundle.css"))
//       .pipe(gulp.dest('HTML/css/concatCss'));
//   });








gulp.task('prod',['sass'],function(){
return gulp.src('HTML/css/*.css')
.pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
}))
.pipe(gulp.dest('HTML/prodcss'))
})



gulp.task('watch',['browser-sync','sass'], function(){
    gulp.watch('HTML/sass/*.sass', ['sass']);
    gulp.watch('HTML/**/*.html', browserSync.reload);
    gulp.watch('HTML/*.js', browserSync.reload);
    })



gulp.task('watch2',['browser-sync','sass2'], function(){
    gulp.watch('HTML/sass/*.css', ['sass2']);
    gulp.watch('HTML/**/*.html', browserSync.reload);
    gulp.watch('HTML/*.js', browserSync.reload);
    })


gulp.task('watch3',['browser-sync','sass3','sassDuqus'], function(){
gulp.watch('src/css/**/*.css', ['sass3','sassDuqus']);
    gulp.watch('src/**/*.html', browserSync.reload);
    gulp.watch('src/*.js', browserSync.reload);
    })



// Автопрефиксер
// const gulpAutopref = require('gulp');
// const autoprefixer = require('gulp-autoprefixer');
 
// gulp.task('default', () =>
//     gulp.src('css/stylenpm install --save-dev gulp-server-livereload.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );

// ЛАйв релоад в браузере

// var gulp = require('gulp');
// var server = require('gulp-server-livereload');
 
// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(server({
//       livereload: true,
//       defaultFile: 'index.html',
//       directoryListing: true,
//       open: true
//     }));
// });



// Галп Watch

// var gulp = require('gulp'),
// watch = require('gulp-watch');

// gulp.task('stream', function () {
// // Endless stream mode 
// return watch('css/**/*.css', { ignoreInitial: false })
//     .pipe(gulp.dest('build'));
// });

// gulp.task('callback', function () {
// // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
// return watch('css/**/*.css', function () {
//     gulp.src('css/**/*.css')
//         .pipe(gulp.dest('build'));
// });
// });