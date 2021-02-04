// (function($) {

//   $.fn.visible = function(partial) {
    
//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;
    
//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };
    
// })(jQuery);

// var win = $(window);

// var allMods = $(".fade-in");

// allMods.each(function(i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible"); 
//   } 
// });

// win.scroll(function(event) {
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in"); 
//     } 
//   });
  
// });


window.addEventListener('scroll', function(e) {

  const target = document.querySelectorAll('.fade-in');
  var index = 0, length = target.length;
  
  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    if(target[index].dataset.direction === 'vertical') {
        target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
    } else {
        var posX = window.pageYOffset * target[index].dataset.ratex;
        var posY = window.pageYOffset * target[index].dataset.ratey;
          
        target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
    }
  }
});