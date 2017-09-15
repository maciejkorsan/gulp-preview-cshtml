# gulp-preview-cshtml

> Allows frontend developers using MacOS viewing cshtml files. Helpful with Umbraco frontend development. (https://github.com/maciejkorsan/gulp-preview-cshtml)


## Install

```
$ npm install --D gulp-preview-cshtml
```


## Usage

```js
const gulp = require('gulp');
const previewcshtml = require('gulp-preview-cshtml');

gulp.task('default', () =>
	gulp.src('src/app.css')
		.pipe(previewcshtml({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);
```


## License

MIT © [Maciej Korsan]