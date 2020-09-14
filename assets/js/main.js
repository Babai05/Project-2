    

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $("nav").addClass("bg-col");
        }
        else{
            $("nav").removeClass("bg-col");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
        $('.to_top').fadeIn('slow');
        } else {
        $('.to_top').fadeOut('slow');
        }
        });
    
        $('.to_top').click(function() {
            $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });
  });

$(function () {

    $(".slider").owlCarousel({
        items:1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,	
    });

    $(".company_details").owlCarousel({
        items:5,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});