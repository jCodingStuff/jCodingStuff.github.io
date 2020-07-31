$(document).ready(function() {
  // Do the hover thing for the items
  $('.my-navlink').hover(function() {
    $(this).animate({
      color: 'white'
    }, 100);
  }, function() {
    $(this).animate({
      color: '#d9d9d9'
    }, 100);
  });
  // Override the resize function
  $(window).resize(function(e) {
        screen_resize();
    });
});
