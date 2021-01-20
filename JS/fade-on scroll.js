var divs = $('.climate-change, .vision');
$(window).scroll(function(){
   if($(window).scrollTop()<1){
         divs.stop(true,true).fadeIn("slow");
   } else {
         divs.stop(true,true).fadeOut("slow");
   }
});