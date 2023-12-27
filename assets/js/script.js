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