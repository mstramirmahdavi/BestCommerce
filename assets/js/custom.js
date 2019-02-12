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
    navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-right-arrow"></span>'],
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
  $("#special-offer").owlCarousel({
    loop: true,
    dots: true,
    margin: 145,
    nav: false,
    slideSpeed: 2000,
    rewindSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
  $("#dailyoffres").owlCarousel({
    dots: true,
    margin: 75,
    nav: true,
    slideSpeed: 2000,
    rewindSpeed: 1000,
    navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-right-arrow"></span>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  });


  $(".loginAndRegisterModal-footer").click(function () {
    if (!$(".loginAndRegisterModal").hasClass("registerOpened")) {
      $(".registerCont").fadeIn();
      $(".loginCont").fadeOut();
      $(".loginAndRegisterModal").addClass("registerOpened");
    } else {
      $(".registerCont").fadeOut();
      $(".loginCont").fadeIn();
      $(".loginAndRegisterModal").removeClass("registerOpened");
    }
  });
});