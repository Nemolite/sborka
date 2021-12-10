const { src, dest, parallel, series, watch } = require('gulp');

const bSync = require('browser-sync').create();

const plus = require('gulp-concat');

const compress = require('gulp-uglify-es').default;

	// Определяем логику работы Browsersync
    function bsync() {
        bSync.init({ // Инициализация Browsersync
            server: { baseDir: 'C:/OpenServer/domains/sborka' }, // Указываем папку сервера
            notify: true, // Отключаем уведомления
            online: true // Режим работы: true или false
        })
    }

    exports.bsync = bsync;

	function mainscripts() {
        return src([ // Берем файлы из источников            
            'js/main.js', // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
            ])
        .pipe(plus('main.min.js')) // Конкатенируем в один файл
        .pipe(compress()) // Сжимаем JavaScript
        .pipe(dest('js/')) // Выгружаем готовый файл в папку назначения
        .pipe(bSync.stream()) // Триггерим Browsersync для обновления страницы
    }  
    
    exports.goscript = mainscripts;