var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'); // Подключаем Browser Sync
   

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'App' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('App/css/**/*.css',browserSync.reload); // Наблюдение за sass файлами в папке sass
    gulp.watch('App/*.html',browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('App/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);