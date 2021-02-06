$(document).on('scroll', function(){
  $('.care-instructions__headline').css('left', Math.max(500-0.35*window.scrollY) + 'px');
})