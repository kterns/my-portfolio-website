//- bottom-static to top-fixed on scroll Nav

$(document).ready(function() {
	var $hero = $('#landing'),
			$firstPage = $('#portfolio'),
			$nav = $('nav'),
			navHeight = 50;

	$(window).bind('scroll', function() {
		var navPos = $(window).height() - navHeight;
		// Starts out at bottom, switch to fixed stop after scrolling down
		if ($(window).scrollTop() > navPos) {
			$hero.css('position', 'fixed');
			$hero.css('top', 'calc(-100vh + ' + navHeight + 'px)');
			$firstPage.css('margin-top', '100vh');
			// $nav.css('position', 'absolute');
			// $nav.css('bottom', '0');
			$('nav').removeClass('move-to-bottom');
			$('nav').addClass('navbar-fixed-top');
		}
		// Reset to bottom if user scrolls back up
		else {
			$hero.css('position', 'relative');
			$hero.css('top', 'auto');
			$firstPage.css('margin-top', '0');
			$('nav').removeClass('navbar-fixed-top');
			$('nav').addClass('move-to-bottom');
		}
	});
});
