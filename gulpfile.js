/*var gulp = require('gulp'), // подключение галпа
	stylus = require('gulp-stylus'),
	pug = require('gulp-pug'),
	csso = require('gulp-csso'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create();*/

global.$ = {
	gulp: require('gulp'),
	stylus: require('gulp-stylus'),
	pug: require('gulp-pug'),
	csso: require('gulp-csso'),
	autoprefixer: require('gulp-autoprefixer'),
	notify: require('gulp-notify'),
	sourcemaps: require('gulp-sourcemaps'),
	browserSync: require('browser-sync').create(),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath) ();
});

/*gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('stylus', function(){
	return gulp.src('src/app/styl/main.styl')
	.pipe(sourcemaps.init())
	.pipe(stylus())
		.pipe(autoprefixer({
            browsers: ['last 5 versions']
                    }))
	.on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Style error"
      }))
	.pipe(csso())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/css'))
	.pipe(browserSync.reload({
		stream: true
	}));

});

gulp.task('pug', function(){
	return gulp.src('src/pug/pages/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('dist'))
	.on('end', browserSync.reload);
});*/

//gulp.task('watch', function() {
//	gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
//	gulp.watch('src/app/styl/**/*.styl', gulp.series('stylus'));
//});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'stylus'),
	$.gulp.parallel('watch', 'serve')
	));
