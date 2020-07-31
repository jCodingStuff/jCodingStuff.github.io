$(document).ready(function() {

  // Do the hover highlighting for the items
  $('.my-navlink').hover(function() {
    $(this).animate({
      color: 'white'
    }, 100);
  }, function() {
    $(this).animate({
      color: '#d9d9d9'
    }, 100);
  });

  // Navbar button
  $('#navbar-button').click(function() {
    // Change appearance of button
    if ($(this).text() == '☰') {
      $(this).text('x');
    } else {
      $(this).text('☰');
    }
    // Toggling visibility of <li> elements
    $('.small-navbar-ele').toggle('slow');
  });

});
