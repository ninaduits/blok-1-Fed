// JavaScript Document
//document.querySelector > zoekt het element op
//addEvent Listener > zorg ervoor dat die luister, mijn geval hamburgermenuopen
// toggle > zorgt voor verstop en zichtbaarheid

var hamburgerMenuknop = document.querySelector("header button");
var hamburgerMenu = document.querySelector ("header nav");

hamburgerMenuknop.addEventListener("click", hamburgerMenuopen);

function hamburgerMenuopen () {
    hamburgerMenu.classList.toggle("openMenu");
    hamburgerMenuknop.classList.toggle("kruisje");


}