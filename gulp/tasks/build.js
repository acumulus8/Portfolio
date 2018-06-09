const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
let del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task("deleteDistFolder", function() {
  return del("./dist");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
  const pathsToCopy = [
    "./app/**/*",
    "!./app/*.html",
    "!./app/assets/images/**",
    "!./app/assets/images/carousellImages/**",
    "!./app/assets/images/lightboxImages/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];
  return gulp.src(pathsToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function() {
  return gulp
    .src("./app/assets/images/**/*")
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder", "sass", "scripts"], function() {
  let stream = gulp
    .src("./app/*.html")
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./dist"));
  return stream;
});

gulp.task("build", [
  "deleteDistFolder",
  "copyGeneralFiles",
  "optimizeImages",
  "usemin"
]);
