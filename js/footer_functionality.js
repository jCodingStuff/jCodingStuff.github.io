$(document).ready(function(){
  for (const social of ['tw', 'in', 'git', 'yt', 'tv']) {
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
});
