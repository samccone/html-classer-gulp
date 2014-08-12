# HTML Classer Gulp

    npm i html-classer-gulp

A gulp wrapper for [html-classer](https://github.com/samccone/html-classer)

### Using

```
  gulp.task("compile", function() {
    gulp.src(rootPath + "/template/**/*.html")
    .pipe(htmlClass({klass: "bkr"}))
  });
```
