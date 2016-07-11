// запуск видео с мотивацией
(function () {
    var $slide = $('#motivation'),
        video = $slide.find('video')[0];

    $slide.attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName !== 'class')
                return;

            if (!/active/.test(event.newValue)) {
                video.pause();
                video.currentTime = 0;
                return;
            }

            // запускаем видео
            video.play();
        }
    });
}());

// запуск видео с новичками в зале
(function () {
    var $slide = $('#noobs'),
        video = $slide.find('video')[0];

    $slide.attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName !== 'class')
                return;

            if (!/active/.test(event.newValue)) {
                video.pause();
                video.currentTime = 0;
                return;
            }

            // запускаем видео
            video.play();
        }
    });
}());

// запуск видео с 2gis
(function () {
    var $slide = $('#2gis'),
        video = $slide.find('video')[0];

    $slide.attrchange({
        trackValues: true,
        callback: function (event) {
            if (event.attributeName !== 'class')
                return;

            if (!/active/.test(event.newValue)) {
                video.pause();
                video.currentTime = 0;
                return;
            }

            // запускаем видео
            video.play();
        }
    });
}());
