// find the top of each section
var section1 = $('.section-1').offset().top;
var section2 = $('.section-2').offset().top;
var section3 = $('.section-3').offset().top;
var section4 = $('.section-4').offset().top;
var section5 = $('.section-5').offset().top;
var section6 = $('.section-6').offset().top;
var section7 = $('.section-7').offset().top;

// number of pixels before the section to start animation
var scrollOffset = 100; 


// run this function when the window scrolls
$(window).scroll(function() {  
  
   
  // get the window height on scroll
  var scroll = $(window).scrollTop() + scrollOffset;  
  
  

  // if scroll hits the top of section-1
  if ( scroll > section1 ) {
    $('.section-2 .planet__paragraph').addClass('reveal');
  }

  // if scroll hits the top of section-2
  if ( scroll > section2 ) {
    $('.section-2 .planet__paragraph').addClass('reveal');
  }

  // if scroll hits the top of section-3
  if ( scroll > section3 ) {
    $('.section-3 .planet__paragraph').addClass('reveal');
  }

 // if scroll hits the top of section-4
 if ( scroll > section4 ) {
  $('.section-4 .planet__paragraph').addClass('reveal');
}

 // if scroll hits the top of section-5
 if ( scroll > section5 ) {
  $('.section-5 .planet__paragraph').addClass('reveal');
}

 // if scroll hits the top of section-6
 if ( scroll > section6 ) {
  $('.section-6 .planet__paragraph').addClass('reveal');
}

 // if scroll hits the top of section-7
 if ( scroll > section7 ) {
  $('.section-7 .planet__paragraph').addClass('reveal');
}

});