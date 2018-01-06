module.exports = function () {
	$.gulp.task('watch', function() {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/app/styl/**/*.styl', $.gulp.series('stylus'));
		$.gulp.watch('src/app/js/main.js', $.gulp.series('script'));
	});
}