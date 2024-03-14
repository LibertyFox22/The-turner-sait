window.onload = function() {
   var menu = document.querySelector ('.menuToggle');
   var nav = document.querySelector ('.navbar ul');
   let center = [55.72801481520384,60.565690172391974]
   
   menu.onclick = function() {
    nav.classList.toggle('active'); //Активация и закрытие меню
   }



   function init(ymaps) {
      let map = new ymaps.Map('map', {
         center: center,
         zoom: 16
      });

      let placemark = new ymaps.Placemark(center, {}, {
         iconLayout: 'default#image' ,
         iconImageHref: 'ref/metka.png' ,
         iconImageSize: [35, 35],
         iconImageOffset: [-20, -40]

      });

   map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('zoomControl'); // удаляем контрол зуммирования

   map.geoObjects.add(placemark);

   }
   
   ymaps.ready(init);

}