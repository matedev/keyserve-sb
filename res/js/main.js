$(document).ready(function(){
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