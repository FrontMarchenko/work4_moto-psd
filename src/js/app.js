import sayHello from './lib/sayHello.js';

sayHello();

//submenu click                                            
$(document).on('click', function(event) {
  var trigger = $('.dropdown');
  if(trigger !== event.target && !trigger.has(event.target).length) {
    $('.submenu').slideUp('fast');
  } 
});

$('.dropdown').click(function(e) {
  e.preventDefault();
  $(this).find('.submenu').slideToggle('fast');
}); 

//Mobile-menu burger
$('.js-burger').on('click', function(e) {
  e.preventDefault();
  var targetBtn = $(this).find('.btn-nav').data('target');
  $(targetBtn).toggleClass('nav__list_is-open');
});




