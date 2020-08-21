$(document).ready(function () {
  $('#btnFadeOut').click(function () {
    // the callback in fadeOut it does something when it is done
    $('#box').fadeOut(2000, function () {
      $('#btnFadeOut').text('Its gone');
    }); // fast, slow, ms
  });
  $('#btnFadeIn').click(function () {
    $('#box').fadeIn(2000);
  });
  $('#btnFadeTog').click(function () {
    $('#box').fadeToggle(1000);
  });
  $('#btnSlideUp').click(function () {
    $('#box').slideUp(2000);
  });
  $('#btnSlideDown').click(function () {
    $('#box').slideDown(2000);
  });
  $('#btnSlideTog').click(function () {
    $('#box').slideToggle(1000);
  });
  $('#btnStop').click(function () {
    $('#box').stop();
  });

  // animations
  $('#moveRight').click(function () {
    $('#box2').animate({
      left: 500,
      height: '300px',
      width: '300px',
      opacity: '0.5'
    });
  });
  $('#moveLeft').click(function () {
    $('#box2').animate({
      left: 0,
      height: '100px',
      width: '100px',
      opacity: '1'
    });
  });
  $('#moveAround').click(function () {
    const box = $('#box2');
    box.animate({
      left: 300
    });
    box.animate({
      top: 300
    });
    box.animate({
      left: 0
    });
    box.animate({
      top: 0
    });
  });
});
