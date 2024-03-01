window.onload = function() {
   var menu = document.querySelector ('.menuToggle');
   var nav = document.querySelector ('.navbar ul');

   
   menu.onclick = function() {
    nav.classList.toggle('active'); //Активация и закрытие меню
   }

}
