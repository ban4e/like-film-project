module.exports = function () {
	$.gulp.task('script:libs', function(){
		return $.gulp.src(['src/app/js/bxslider.js'])
			.pipe($.concatination('libs.min.js'))
			.pipe($.gulp.dest('dist/js'))
			.pipe($.browserSync.reload({
				stream: true
			}));

	});

	$.gulp.task('script', function(){
		return $.gulp.src('src/app/js/main.js')
			.pipe($.gulp.dest('dist/js'))
			.pipe($.browserSync.reload({
				stream: true
			}));

	});
}