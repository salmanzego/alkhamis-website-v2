$('#hamburger').click(() => {
  document.getElementById('sidebar_toggle').classList.toggle('open');
  document.getElementById('sidebar').classList.toggle('open');
});

window.addEventListener('scroll',()=>{
  if (document.documentElement.scrollTop > 0) {
      document.getElementById('navbar').style.boxShadow = 'rgba(0, 0, 0, 0.16) -2px 1px 3px';
      document.getElementById('navbar').style.backgroundColor = '#fff';
  }else{
      document.getElementById('navbar').style.boxShadow = 'none';
      document.getElementById('navbar').style.backgroundColor = 'transparent';

  }
})


jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('.client-owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 6,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 850,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 3
      },
      1170: {
        items: 6
      }
    }
  });
});