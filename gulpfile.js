const exec = require('child_process').exec;
const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-clean-css');
// 1. Copy the index.html as is
gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('app/'));
});
// 2. Compile CSS file and move them to the app folder
gulp.task('css', () => { // 2.
    return gulp.src('src/**/*.css')
        .pipe(css())
        .pipe(gulp.dest('app/'));
});
// 3. Compile JS files and move them to the app folder
gulp.task('js', () => { // 3.
    return gulp.src(['main.js', 'src/**/*.js', 'src/**/*.jsx'])
         .pipe(babel())
         .pipe(gulp.dest('app/'));
});
gulp.task('build', gulp.series('html', 'css', 'js'));
// 4. Start the electron process.
gulp.task('start', gulp.series('build', () => { // 4.
    process.env.ELECTRON_ENV = 'development';
    return exec(
        __dirname+'/node_modules/.bin/electron .'
    ).on('close', () => process.exit());
}));
gulp.task('release', gulp.series('build', () => {
    return exec(        
        __dirname+'/node_modules/.bin/electron-builder .'
    );
}));