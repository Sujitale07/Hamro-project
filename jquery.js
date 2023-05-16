

$(".project").owlCarousel({
margin: 20,
loop: true,
autoplay: true,
autoplayTimeout: 2000,
autoplayHoverPause: true,
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},

responsive: {
  0:{
    items:1,
    nav: false
  },
  600:{
    items:2,
    nav: false
  },
  1000:{
    items:3,
    nav: false
  }
}
});