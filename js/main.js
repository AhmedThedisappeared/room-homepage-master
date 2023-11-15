let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let text=document.querySelectorAll(".intro");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        text[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    text[slideIndex-1].style.display = "block";
}

// The NavBar controls
let toggler =document.getElementById("hamburger");
let nav =document.querySelector(".img-container .nav");
let navbar=document.querySelector(".img-container .nav ul");
let logo =document.getElementById("logo");

toggler.addEventListener("click",function(){
    if(toggler.getAttribute("src")==="images/icon-close.svg"){
        toggler.setAttribute("src","images/icon-hamburger.svg");
    }else  {
        toggler.setAttribute("src","images/icon-close.svg");
    }
    navbar.classList.toggle("show");
    logo.classList.toggle("hide");
    nav.classList.toggle("bg-white");
});