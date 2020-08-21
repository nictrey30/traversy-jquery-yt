// $(document).ready(function () {
//   $('#btn1').click(function () {
//     alert('Button 1 clicked');
//   });
//   $('#btn2').on('click', function () {
//     alert('Button 2 clicked');
//   });
// });

$(document).ready(function () {
  // $('#btn1').on('click', function () {
  //   $('.para1').toggle();
  // });
  // $('#btn1').on('dblclick', function () {
  //   $('.para1').toggle();
  // });
  // $('#btn1').hover(function () {
  //   $('.para1').toggle();
  // });
  // The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
  // $('#btn1').on('mousemove', function () {
  //   $('.para1').css('color', 'crimson');
  // });
  // $('#btn1').on('mousedown', function () {
  //   $('.para1').toggle();
  // });
  // $('#btn1').on('mouseup', function () {
  //   $('.para1').toggle();
  // });
  $('#btn1').on('click', function (event) {
    // console.log(event);
    // console.log(event.currentTarget.id);
    // console.log(event.currentTarget.innerHTML);
    // console.log(event.currentTarget.classList);
    console.log(event.currentTarget.className);
    $('.para1').toggle();
  });
  $(document).mousemove(function (e) {
    $('#coords').html(`Coords: X ${e.clientX} - Y ${e.clientY} `);
  });

  $('input').focus(function (e) {
    // console.log(`focused on ${e.currentTarget.id}`);
    $(this).css('background', 'pink');
  });

  $('input').blur(function (e) {
    // blur is the event opposite to focus, when you click outside f the box
    $(this).css('background', '#fff');
  });

  $('input').keyup(function (e) {
    console.log(e.currentTarget.value);
  });

  $('select#gender').change(function () {
    console.log($(this).val());
  });

  $('#form').submit(function (e) {
    e.preventDefault();
    console.log('submitted');
  });
});
