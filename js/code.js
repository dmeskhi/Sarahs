/* On Scroll Appearing Sticky Header */
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 300) {
                $('.headerafter').slideDown("slow");
            } else {
                $('.headerafter').slideUp("slow");
            }
        });
    });
})(jQuery);

$('.logo-handle').on('click', function(){
	$('ul').toggleClass('show');
});

