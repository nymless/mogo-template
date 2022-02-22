import fileInclude from 'gulp-file-include';
import gulpHtmlImgWrapper from 'gulp-html-img-wrapper';
import versionNumber from 'gulp-version-number';
import prettier from 'gulp-prettier';

export const html = () => {
    return app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'HTML',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(fileInclude())
        .pipe(
            app.plugins.if(
                app.isBuild,
                gulpHtmlImgWrapper({
                    classMove: false,
                    extensions: ['.jpg', '.png', '.jpeg'],
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: '%DT%',
                    append: {
                        key: '_v',
                        cover: 0,
                        to: ['css', 'js'],
                    },
                    output: {
                        file: 'gulp/version.json',
                    },
                })
            )
        )
        .pipe(prettier({ tabWidth: 4 }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
