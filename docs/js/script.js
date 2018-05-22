// script.js

$(document).ready(function(){
	$('li.my-label').click(function(){
		$(this).parent().toggleClass('active');
	});

	$('ul.mdl-list').append('<li class="mdl-list__item my-uarr"><span class="mdl-list__item-primary-content"><span><i class="material-icons">keyboard_arrow_up</i></span></span></li>');

	$('.my-uarr').click(function(){
		$(this).parent().toggleClass('active');
	});
});