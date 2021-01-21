// window.onload = fadeIn; 
  
// function fadeIn() { 
//     var fade = document.getElementById("climate-change, vision"); 
//     var opacity = 0; 
//     var intervalID = setInterval(function() { 

//         if (opacity < 1) { 
//             opacity = opacity + 0.2
//             fade.style.opacity = opacity; 
//         } else { 
//             clearInterval(intervalID); 
//         } 
//     }, 1500); 
// }

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(200,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});