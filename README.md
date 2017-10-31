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
  return gulp.src([`${projectSource}/Views/*.cshtml`, `!${projectSource}/Views/Layout.cshtml`, `!${projectSource}/Views/*.ref.cshtml`])
        .pipe(previewCshtml(`${projectSource}/Views/Layout.cshtml`, projectSource))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(gulp.dest('./dist/'));
});
```

## Working with partials 

All you have to do is create a .ref.cshtml file near regular partial .cshtml. So if you import navigation like
```
@Html.Partial("/Views/Partials/_MainNavigation.cshtml")
```
you don't have to 
change your _Layout/_Whatever.cshtml file. Just copy static html to `/Views/Partials/_MainNavigation.ref.cshtml`


## Changelog

#0.2.0 
- added support for @Html.Partial imports. 


## License

MIT © [Maciej Korsan]