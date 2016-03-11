var $ulBelow = $('<ul>');
var $ulAbove = $('<ul>');

$('body').append('<h1>Below ground veggies</h1>');
$('body').append($ulBelow);

$('body').append('<h1>Above ground veggies</h1>');
$('body').append($ulAbove);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $ulBelow.append($(this));
  } else {
    $ulAbove.append($(this));
  }
});

$('ul:first-child').remove();
