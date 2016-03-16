var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    scsslint = require('gulp-scss-lint');

var outputDir,
    sassStyle,
    sassSources,
    sassWatch,
    fontSources,
    htmlSources,
    htmlIndex,
    jsSources;

outputDir = 'dist/';
sassStyle = 'expanded';
sassSources = [
    'app/app.scss'
];
sassWatch = [
    'app/app.scss',
    'app/scss/*.scss',
];
jsSources = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
];
fontSources = [
    'node_modules/bootstrap-sass/assets/fonts/'
];
htmlIndex = [
    'app/index.html'
];
htmlSources = [
    'app/html/*.html'
];

gulp.task('scss', function() {
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'app',
            style: sassStyle
        })
            .on('error', gutil.log))
        //.pipe(minifycss())
        .pipe(gulp.dest(outputDir + 'css'))
        //.pipe(connect.reload())
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        //.pipe(uglify())
        .on('error', gutil.log)
        .pipe(gulp.dest(outputDir + 'js'))
        //.pipe(connect.reload())
});

gulp.task('htmlIndex', function() {
    gulp.src(htmlIndex)
        .pipe(gulp.dest(outputDir));
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(gulp.dest(outputDir + 'html'));
});

gulp.task('scssLint', function() {
    gulp.src(sassWatch)
        .pipe(scsslint({
            'config': '.scss-lint.yml',
            'reporterOutput': 'scssReport.json'
        }))
        .on('error', gutil.log)
});

gulp.task('watch', function() {
    gulp.watch(sassWatch, ['scssLint']);
    gulp.watch(sassWatch, ['scss']);
    gulp.watch(jsSources, ['js']);
    gulp.watch(htmlIndex, ['htmlIndex']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('start', [
    'scssLint',
    'scss',
    'js',
    'html',
    'htmlIndex',
    'watch']
);