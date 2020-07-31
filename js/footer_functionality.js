const SOCIALS = ['tw', 'in', 'git', 'yt', 'tv'];

$(document).ready(function(){

  // Animate hovering over socials
  for (const social of SOCIALS) {
    let bgName = '#' + social + '-bg'
    let iconName = '#' + social + '-icon'
    $(bgName).hover(function() {
      $(iconName).animate({
        color: 'white'
      }, 100);
    }, function() {
      $(iconName).animate({
        color: '#999'
      }, 100);
    });
  }

  // Animate hovering over sections
  $('.sections-footer').hover(function() {
    $(this).animate({
      color: 'white'
    }, 100);
  }, function() {
    $(this).animate({
      color: '#999'
    }, 100);
  });

});
