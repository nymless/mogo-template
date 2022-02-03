import webpack from "webpack-stream"; // webpack плагин для gulp (требует установку npm webpack)

export const script = () => {
    return app.gulp
        .src(app.path.src.script, { sourcemaps: app.isDev }) // {карта исходников} для того чтобы при возниконовении ошибки понимать в каком файле
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            webpack({
                mode: app.isBuild ? "production" : "development",
                output: {
                    filename: "app.min.js",
                },
            })
        )
        .pipe(app.gulp.dest(app.path.build.script))
        .pipe(app.plugins.browsersync.stream());
};
