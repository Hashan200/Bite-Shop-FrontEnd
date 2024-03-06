let searchform =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
 searchform.classList.toggle('active');
 shoppingCart.classList.remove('active');
 loginForm.classList.remove('active');
 navbar.classList.remove('active');
}

let shoppingCart =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm =document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('navbar');
document.querySelector('#menu-btn').onclick = ()=>{
  navbar.classList.toggle('active');
  searchform.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');

}



window.onscroll = ()=>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');   
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var swiper = new Swiper(".Review-slider", {
   loop:true,
   spaceBetween:20,
   autoplay:{
       delay:7500,
       disableOnInteraction:false,
   },
   centeredSlides :true,
   breakpoints:{
    0:{
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020:{
      slidesPerView: 3,
    },
   },
});

