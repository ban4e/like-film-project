module.exports = function () {
	$.gulp.task('stylus', function(){
		return $.gulp.src('src/app/styl/main.styl')
		.pipe($.sourcemaps.init())
		.pipe($.stylus({
			'include css': true
		}))
			.pipe($.autoprefixer({
	            browsers: ['last 5 versions']
	                    }))
		.on("error", $.notify.onError({
	        message: "Error: <%= error.message %>",
	        title: "Style error"
	      }))
		.pipe($.csso())
		.pipe($.sourcemaps.write())
		.pipe($.gulp.dest('dist/css'))
		.pipe($.browserSync.reload({
			stream: true
		}));

	});
}