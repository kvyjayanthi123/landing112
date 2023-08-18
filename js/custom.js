
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).on('load', function() {
      setTimeout(function() {
          $('.preloader').addClass('vanishing');
      }, 4000);
  });

    // NAVBAR
    $(".navbar").headroom();

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
    });

    $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
    });
    
  })(window.jQuery);
