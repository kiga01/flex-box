'use strict';

//Remember typings install
import * as gulp from 'gulp';
import * as concat from 'gulp-concat';
import * as compass from 'gulp-compass';
import * as scsslint from 'gulp-scss-lint';

const outputDir = 'dist/';

const sassStyle = 'expanded';
const sassSources = [
    'app/app.scss'
];
const sassWatch = [
    'app/app.scss',
    'app/scss/*.scss',
];
const jsSources = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
];
const fontSources = [
    'node_modules/bootstrap-sass/assets/fonts/'
];
const htmlIndex = [
    'app/index.html'
];
const htmlSources = [
    'app/html/*.html'
];

gulp.task('scss', () => gulp.src(sassSources)
    .pipe(compass({
        sass: 'app',
        style: sassStyle
    }))
    .pipe(gulp.dest(outputDir + 'css'))
);

gulp.task('js', () => gulp.src(jsSources)
    .pipe(concat('script.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(outputDir + 'js'))
    //.pipe(connect.reload())
);

gulp.task('htmlIndex', () => gulp.src(htmlIndex)
    .pipe(gulp.dest(outputDir))
);

gulp.task('html', () => gulp.src(htmlSources)
    .pipe(gulp.dest(outputDir + 'html'))
);

gulp.task('scssLint', () => gulp.src(sassWatch)
    .pipe(scsslint({
        'config': '.scss-lint.yml',
        'reporterOutput': 'scssReport.json'
    }))
);

gulp.task('fonts', () => gulp.src(fontSources)
    .pipe(gulp.dest(outputDir + 'fonts'))
);

gulp.task('scssLint.w', () => gulp.watch(sassWatch, ['scssLint']));
gulp.task('scss.w', () => gulp.watch(sassWatch, ['scss']));
gulp.task('js.w', () => gulp.watch(jsSources, ['js']));
gulp.task('htmlIndex.w', () => gulp.watch(htmlIndex, ['htmlIndex']));
gulp.task('html.w', () => gulp.watch(htmlSources, ['html']));

gulp.task('start', ['scssLint', 'scssLint.w', 'scss', 'scss.w', 'js', 'js.w', 'fonts', 'html', 'html.w', 'htmlIndex',
    'htmlIndex.w']);
