$(document).ready(function() {
  $('.my-navlink').hover(function() {
    $(this).animate({
      color: 'white'
    }, 100);
  }, function() {
    $(this).animate({
      color: '#d9d9d9'
    }, 100);
  });
});

function responsiveNavbar() {
  let x = $('#the-navbar')[0];
  if (x.className == 'sticky-top my-navbar') {
    x.className += ' responsive';  // Add the responsive class
    $('.navbar-list').css('display', 'inline');
  } else {
    x.className = 'sticky-top my-navbar';
    $('.navbar-list').css('display', 'none');
  }
}
