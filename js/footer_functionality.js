$(document).ready(function(){
  for (const social of ['tw', 'in', 'git', 'yt']) {
    let bgName = '#' + social + '-bg'
    let iconName = '#' + social + '-icon'
    $(bgName).hover(function() {
      // console.log('Hovering over ' + bgName);
      // console.log('Animating ' + iconName);
      $(iconName).animate({
        color: 'white'
      }, 200);
    }, function() {
      // console.log('Leaving ' + bgName);
      // console.log('Animating ' + iconName);
      $(iconName).animate({
        color: '#999'
      }, 200);
    });
  }
});
