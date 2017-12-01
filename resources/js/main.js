$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: false,
  arrows: false,
  pauseOnFocus: false,
  pauseOnHover: false,
  fade: true,
  });

  $(window).scroll(
      {
          previousTop: 0
      },
      function () {
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop) {

          $(".navbar").fadeIn('slow');
      } else {
          $(".navbar").fadeOut('slow');
      }
      this.previousTop = currentTop;
  });

});
