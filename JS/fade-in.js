window.onload = fadeIn; 
  
function fadeIn() { 
    var fade = document.getElementById("vision"); 
    var opacity = 0; 
    var intervalID = setInterval(function() { 

        if (opacity < 1) { 
            opacity = opacity + 0.2
            fade.style.opacity = opacity; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 1500); 
}