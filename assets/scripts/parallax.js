$(window).scroll(function() {
	var wScroll = $(window).scrollTop();
	imgScroll(wScroll);
});

function imgScroll(wScroll) {
	var x = $('#about').css('background-position').split(" ")[0];
	//console.log(x);
	$('#about').css('background-position', x + ' ' + (54 - wScroll) + 'px');
	//console.log(wScroll + 54);
}

/* TODO: Set x position on window resize and store globally */
