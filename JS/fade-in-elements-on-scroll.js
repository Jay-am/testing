// $(window).on("scroll",function() {
//   function fade() {
//       var animation_height = $(window).innerHeight() * 0.25;
//       var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

//       $('.fade').each(function() {

//           var objectTop = $(this).offset().top;
//           var windowBottom = $(window).scrollTop() + $(window).innerHeight();

//           if ( objectTop < windowBottom ) {
//               if ( objectTop < windowBottom - animation_height ) {
//                   $(this).html( 'fully visible' );
//                   $(this).css( {
//                       transition: 'opacity 0.1s linear',
//                       opacity: 1
//                   } );

//               } else {
//                   $(this).html( 'fading in/out' );
//                   $(this).css( {
//                       transition: 'opacity 0.25s linear',
//                       opacity: (windowBottom - objectTop) * ratio
//                   } );
//               }
//           } else {
//               $(this).html( 'not visible' );
//               $(this).css( 'opacity', 0 );
//           }
//       });
//   }
//   $('.fade').css( 'opacity', 0 );
//   fade();
//   $(window).scroll(function() {fade();});
// });


// Source: https://stackoverflow.com/questions/26694385/fade-in-on-scroll-down-fade-out-on-scroll-up-based-on-element-position-in-win



$(document).ready(function() {
  $(window).scroll( function(){
      $('.hideme').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
              $(this).addClass('showme');
          }
          if( bottom_of_window < bottom_of_object ){
              $(this).removeClass('showme');
          }
      });
  });
});