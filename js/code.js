$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('header').addClass('scrolled');
     }
    else {
      $('header').removeClass('scrolled');
    }
  });
});


$('.logo-handle').on('click', function(){
	$('ul').toggleClass('show');
});

