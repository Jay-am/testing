$(document).on('scroll', function() {
  $('intro-2').css("left", Math.max(500 - 0.35*window.scrollY) + "px");
  // $('intro-2').css("left", Math.max(1400 - 0.35*window.scrollY) + "px");
  // $('collaborations__type--1').css("left", Math.max(500 - 0.35*window.scrollY, 100) + "px");
  // $('collaborations__type--1').css("left", Math.max(500 - 0.35*window.scrollY, 0) + "px");
})