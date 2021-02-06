// $(function(){
//   var scroll = $(document).scrollTop();
//   var navHeight = $('.header__nav').outerHeight();

//   $(window).scroll(function(){
//     var scrolled = $(document).scrollTop();
//     if (scrolled > navHeight){
//       $('.header__nav').addClass('animate');
//       }else{
//         $('.header__nav').removeClass('animate');
//       }
//       if (scrolled > scroll){
//         $('.header__nav').removeClass('sticky');
//       }else{
//         $('.header__nav').addClass('sticky');
//       }
//       scroll = $(document).scrollTop();
//   });
// });

const header = document.querySecector ('header__nav');
let prevScrollPos = window.pageXOffset;
window.onScroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollPos > currentScrollPos
  ? header.classlist.remove('scroll')
  : header.classlist.add('scroll');
  prevScollPos = currentScrollPos;
}