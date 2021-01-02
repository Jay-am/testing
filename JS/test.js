$(document).ready(function () {
  $(window).scroll(function () {
      var wScroll = $(this).scrollTop();

      $('wholesale__headline').css({
          'transform' : 'translateX('wScroll+'px)'
      });
  });
});