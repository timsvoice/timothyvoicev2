//= require foundation

// slick slider
$(document).ready(function(){
  $('.article-lead').slick({
    infinite: true,
    speed: 250,
    // fade: true,
    cssEase: 'linear'
  });
});


// resize  
  function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -0 + "px";
  }
 
  resizesplash();
  window.onresize = function() {
      resizesplash();
};