var gulp = require('gulp'),
	concat = require('gulp-concat'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('copy', function() {
    gulp.src(['node_modules/normalize.css/normalize.css'])
    	.pipe(gulp.dest('assets/dist'));
});

gulp.task('css', function(){
    gulp.src(['assets/dist/**/*.css', 'assets/css/**/*.css'])
        .pipe(cleanCSS())
        .pipe(autoprefixer())
		.pipe(concat('style.min.css'))
        .pipe(gulp.dest('assets'))
});

gulp.task('default', ['css']);

gulp.task('watch', ['css'], function(){
    gulp.watch('assets/css/**/*.css', ['css']);
});
