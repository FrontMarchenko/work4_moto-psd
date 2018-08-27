import sayHello from './lib/sayHello.js';

sayHello();

                                                   
$(document).on('click', function(event) {
  var trigger = $('.dropdown');
  if(trigger !== event.target && !trigger.has(event.target).length) {
    $('.submenu').slideUp('fast');
  } 
});

$('.dropdown').click(function() {
  $(this).find('.submenu').slideToggle('fast');
}); 


$('.js-burger').on('click', function() {
  var targetBtn = $(this).find('.btn-nav').data('target');
  $(targetBtn).toggleClass('nav__list_is-open');
});
