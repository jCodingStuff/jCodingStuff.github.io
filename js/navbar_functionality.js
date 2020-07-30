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

function responsiveNavbar() {
  let x = $('#the-navbar')[0];
  if (x.className == 'sticky-top my-navbar') {
    x.className += ' responsive';  // Add the responsive class
  } else {
    x.className = 'sticky-top my-navbar';
  }
  if ($('.navbar-list').css('display') == 'none') {
    $('.navbar-list').css('display', 'inline');
  } else {
    $('.navbar-list').css('display', 'none');
  }
}

function screen_resize() {
  let w = parseInt(window.innerWidth);
  if (w > 600) {
    $('.navbar-list').css('display', 'block');
  } else {
    $('.navbar-list').css('display', 'none');
  }
}
