$(window).scroll(function() {
	imgScroll();
});

function imgScroll() {
	var wScroll = $(window).scrollTop();
	var x = $('#about').css('background-position').split(" ")[0];
	$('#about').css('background-position',x + ' -' + wScroll + 'px');
}
