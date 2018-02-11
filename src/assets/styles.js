$(document).ready(function() {
  $('.full-box').css('min-height' , $(window).height());
});

window.addEventListener("optimizedResize", function() {
  $('.full-box').css('min-height' , $(window).height());
});
