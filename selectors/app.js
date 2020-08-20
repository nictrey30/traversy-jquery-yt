// $('h1').hide();
// $('h1#heading1').hide();
// $('.heading2').hide();

$('p span').css('color', 'red');

// $('ul#list li:first-child').css('color', 'crimson');
// $('ul#list li:last-child').css('color', 'green');

$('ul#list li:nth-child(2n)').css('color', 'crimson');
$('ul#list li:nth-child(2n+1)').css({
  'background-color': 'crimson',
  color: '#fff'
});

// $("input[type='button']").hide();
// $(':button').hide();

$('[href]').css('color', 'crimson');
$('a[href="http://yahoo.com"]').css('color', 'green');
