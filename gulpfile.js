/* Required Packages */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

/* Task to handle image files */
gulp.task('images', function() {
  // For now just move all the images to deployment folder
  return gulp.src('./assets/images/*')
  /* TODO: Add image optimization here */
  .pipe(gulp.dest('./public/img'));
});

/* Task to convert jade to html */
gulp.task('jade', function(){
  // Convert the jade files directly under _jadefiles
  // index.jade contains imports for all partials under _includes
  return gulp.src('_jadefiles/*.jade')
  .pipe(jade({
    /* TODO: Non-minified HTML. Change this to false for production? */
		pretty: true
	}))

  // Publish the final html page(s) to the deployment folder
  .pipe(gulp.dest('./public'));
});

/* Task to convert SASS to CSS */
gulp.task('styles', function() {
  // Convert the sass files directly under assets/styles
  // main.sass contains imports for all partials
  return gulp.src('./assets/styles/main.sass')

  // Placeholder for Bower
	.pipe(sass({
  /* TODO: Uncomment and modify if using bower components */
	// 	includePaths: [
	// 		'./bower_components/bootstrap/dist/css'
	// 	]
	}))

  // Concatenate all the CSS files into main.css
	.pipe(concat('main.css'))

  // Add prefixes, like -webkit, -moz, etc
  .pipe(autoprefixer({
    /* TODO: Should I increase this? */
    browsers: ['last 2 versions'],
    /* TODO: Research this attribute further */
    cascade: false
  }))

  // Publish the final main.css to the deployment folder
	.pipe(gulp.dest('./public/css'));
});

/* Task to compile js into a single file */
gulp.task('scripts', function() {
	return gulp.src([
		'./assets/scripts/*.js'
	])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./public/js'));

  /* TODO: Uncomment and modify if using Bower components */
  /* TODO: Remove return keyword above as well */
	//return gulp.src('./bower_components/modernizer/modernizr.js')
	//	.pipe(gulp.dest('./public/js'));
});

/* Add any public downloads to the deployment folder */
gulp.task('downloads', function() {
  return gulp.src('./downloads/*')
  .pipe(gulp.dest('./public/downloads'));
});

/* gulp watch - Watch task to run above tasks on file changes */
gulp.task('watch', function() {
  gulp.watch('./downloads/**/*.*', ['downloads']);
	gulp.watch('_jadefiles/**/*.jade', ['jade']);
	gulp.watch('./assets/styles/**/*.sass', ['styles']);
	gulp.watch('./assets/scripts/**/*.js', ['scripts']);
  gulp.watch('./assets/images/**/*.*', ['images']);
});

/* TODO: Add deploy task to make deploy ready and then deploy

  /* TODO: Add CSS minification package */
  //.pipe(   )

  /* TODO: Add JS minification package */
  //.pipe(   )

// Default task when typing 'gulp'
gulp.task('default', ['downloads', 'images', 'jade', 'styles', 'scripts']);


/* TODO: Implement Source Maps? (gulp-sourcemaps) */
// Default task when typing 'gulp'
// gulp.task('default', function () {
// 	return gulp.src('src/**/*.css')
// 		.pipe(sourcemaps.init())
// 		.pipe(autoprefixer())
// 		.pipe(concat('all.css'))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('dist'));
// });
