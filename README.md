# gulp-preview-cshtml

> Allows frontend developers working on MacOS to work on their projects using original cshtml files. Helpful with Umbraco frontend development. (https://github.com/maciejkorsan/gulp-preview-cshtml)


## Install

```
$ npm install --D gulp-preview-cshtml
```


## Usage

```js
const gulp = require('gulp');
const previewcshtml = require('gulp-preview-cshtml');
const projectName = 'myProject';

gulp.task('html', function() {
  return gulp.src([`../src/Web/${projectName}/Views/*.cshtml`, `!../src/Web/${projectName}/Views/Layout.cshtml`, `!../src/Web/${projectName}/Views/*.ref.cshtml`])
        .pipe(previewCshtml(`../src/Web/${projectName}/Views/Layout.cshtml`))
        .pipe(gulp.dest('./dist/'));
});
```


## License

MIT © [Maciej Korsan]