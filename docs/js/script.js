// script.js

$(document).ready(function(){
	$('li.my-label').click(function(){
		$(this).parent().toggleClass('active');
	});

	$('ul.mdl-list').append('<li class="mdl-list__item my-uarr"><span class="mdl-list__item-primary-content"><span><i class="material-icons">keyboard_arrow_up</i></span></span></li>');

	$('.my-uarr').click(function(){
		$(this).parent().toggleClass('active');
	});

	$('ul.my-tab > li').click(function(){
		var this_id = $(this).attr('id');
		this_id = '.' + this_id;
		$(this_id).toggleClass('active');
	});

	$('.my_subtitle').hide();
	// $('.mdl-layout__tab-bar #scroll-tab-a_GE').
});