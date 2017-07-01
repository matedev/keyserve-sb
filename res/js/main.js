$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    },
	    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	})

	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});

});

var $cog = $('#cog'),
    $body = $(document.body),
    bodyHeight = $body.height();

$(window).scroll(function () {
    $('.hexagon').css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });
});