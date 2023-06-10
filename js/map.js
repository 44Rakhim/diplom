ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [53.285798, 69.386358],
            zoom: 20
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.285798, 69.386358]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Управление Ветеринарии'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

    myMap.geoObjects
        .add(myGeoObject)
}
