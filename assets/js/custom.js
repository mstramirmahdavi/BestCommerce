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
});