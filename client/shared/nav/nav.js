$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 53;
    // Starts out at bottom, switch to fixed stop after scrolling down
    if ($(window).scrollTop() > navHeight) {
      $('#landing').css('position', 'fixed');
      $('#landing').css('top', 'calc(-100vh + 53px)');
      $('#portfolio').css('margin-top', '100vh');
      $('nav').removeClass('navbar-static-bottom');
      $('nav').addClass('navbar-fixed-top');
    }
    // Reset to bottom if user scrolls back up
    else {
      $('#landing').css('position', 'relative');
      $('#landing').css('top', 'auto');
      $('#portfolio').css('margin-top', '0');
      $('nav').removeClass('navbar-fixed-top');
      $('nav').addClass('navbar-static-bottom');
    }
  });
});
