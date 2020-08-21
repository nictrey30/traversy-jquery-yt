$(document).ready(function () {
  // .load( url [, data ] [, complete ] )
  // url - A string containing the URL to which the request is sent.
  // data - A plain object or string that is sent to the server with the request.
  // complete - A callback function that is executed when the request completes.
  // Type: Function(responseText, textStatus, jqXHR)
  // $('#result').load('test.html', function (responseText, statusText, xhr) {
  //   // console.log(statusTxt);
  //   if (statusText === 'success') {
  //     console.log('it went fine');
  //   } else if (statusText === 'error') {
  //     console.log(`Error: ${xhr.status}, ${xhr.statusText}`);
  //   }
  // });
  // _________________________________________________________________
  // .get( url [, data ] [, success ] [, dataType ] )
  // url - A string containing the URL to which the request is sent.
  // data - A plain object or string that is sent to the server with the request.
  // success - Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
  // A callback function that is executed if the request succeeds. Required if dataType is provided, but you can use null or jQuery.noop as a placeholder.
  // dataType -The type of data expected from the server. Default: Intelligent Guess (xml, json, script, text, html).
  // $.get('test.html', function (data) {
  //   $('#result').html(data);
  // });
  // $.getJSON('users.json', function (data, textStatus, jqXHR) {
  //   $.each(data, function (index, val) {
  //     $('ul#users').append(`<li>${val.firstName}</li>`);
  //   });
  //   console.log(textStatus); // success
  // });
  $.ajax({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
    dataType: 'json'
  }).done(function (data) {
    console.log(data);
    $.map(data, function (post, i) {
      $('#result').append(
        '<h3>' + post.title + '</h3><p>' + post.body + '</p>'
      );
    });
  });

  $('#postForm').submit(function (e) {
    e.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var url = $(this).attr('action');

    $.post(url, { title: title, body: body }).done(function (data) {
      console.log('Post Saved');
      console.log(data);
    });
  });
});
