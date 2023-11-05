let menuBtn = document.getElementById("hamburguer-menu");

menuBtn.addEventListener("click", openMobileMenu);


let menuUl = document.getElementsByClassName("navigation-menu-ul")[0];

function openMobileMenu(){
    menuUl.classList.toggle("activeMenu");
}