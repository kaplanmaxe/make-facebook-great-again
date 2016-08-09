const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("transpile-core", () => {
  return gulp.src(["content-script.js", "background.js"])
  .pipe(babel({presets:['es2015']}))
  .pipe(gulp.dest("./dist"));
});

gulp.task("babel-core", () => {
  return gulp.watch(["content-script.js", "background.js"], ['transpile-core']);
});


gulp.task("default", ['transpile-core', 'babel-core']);