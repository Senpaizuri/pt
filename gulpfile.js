const
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    cssNano= require('gulp-cssnano'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify')

sass.compiler = require('node-sass')


gulp.task('sass',()=>{
    return gulp.src('./dev/scss/base.scss')
        .pipe(sass({sourceMap:true}).on('error',sass.logError))
        .pipe(gulp.dest('./src/css/'))
})

gulp.task('minify',async()=>{
    return gulp.src(['./src/css/base.css'])
        .pipe(concat('index.css'))
        .pipe(cssNano())
        .pipe(gulp.dest('./src/dist/'))
})

gulp.task('uglify',()=>{
    return gulp.src('./dev/js/app.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./src/dist/'))
})

gulp.task('build',async()=>{
    gulp.parallel(gulp.series('sass','minify'))
})

gulp.task('watch',()=>{
    gulp.watch(['./dev/scss/*/*.scss','./dev/scss/*.scss'],
        gulp.series('sass','minify')
    )
    // gulp.watch(['./dev/js/*.js'],
    //     gulp.series('uglify')
    // )
})
