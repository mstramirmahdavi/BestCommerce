$(document).ready(function () {
  $("#main_slider").owlCarousel({
    loop: true,
    slideSpeed: 300,
    dots: false,
    paginationSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    singleItem: true,
    pagination: false,
    rewindSpeed: 500,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $("#hot-offer").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    slideSpeed: 2000,
    navText: ['<span class="icon-left-arrow"></span>','<span class="icon-right-arrow"></span>'],
    rewindSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
});