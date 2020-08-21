$(document).ready(function () {
  // $('p.para1').css('color', 'crimson');
  $('p.para1').css({
    color: 'crimson',
    background: '#ccc'
  });
  // $('p.para2').addClass('myClass');
  // $('p.para2').removeClass('myClass');
  $('#btn1').click(function () {
    $('p.para2').toggleClass('myClass');
  });

  // $('#myDiv').text('Hello World!');
  $('#myDiv').html('<h3>Hello World!</h3>');

  // console.log($('#myDiv').text());
  // $('ul').append('<li>append list item</li>');
  // $('ul').prepend('<li>prepend list item</li>');

  // appendTo Insert every element in the set of matched elements to the end of the target.
  $('.para1').appendTo('.para2');

  // append, prepend - used inside the element / before, after - used outside the element
  $('ul').after('<h4>after ul</h4>');

  // empty() takes all the inner elements out
  // detach() Remove the set of matched elements from the DOM.

  $('a').attr('target', '_blank');
  console.log($('a').attr('href'));

  // remove attributes
  // $('a').removeAttr('target');

  // wrap() Wrap an HTML structure around each element in the set of matched elements.
  // $('p').wrap('<h1>');
  // $('p').wrapAll('<h1>');  // use one h1 element and wrap all elements matched

  $('#newItem').keyup(function (e) {
    e.preventDefault();
    let code = e.which;
    if (code === 13) {
      $('ul').append(`<li>${e.target.value}</li>`);
      $(this).val('');
    }
    console.log(e);
  });

  // array methods
  let myArr = ['ryu', 'chun-li', 'luigi', 'mario'];
  $('ul#names').text('Names');
  $.each(myArr, function (index, value) {
    $('ul#names').append(`<li>${value}</li>`);
  });

  // toArray - Retrieve all the elements contained in the jQuery set, as an array.
  let newArr = $('ul#names li').toArray();
  console.log(newArr);
  $.each(newArr, function (index, value) {
    // console.log(value.innerHTML);
    value.innerHTML += ' !';
  });
});
