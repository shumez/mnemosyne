// script.js

$(document).ready(function(){
	$('li.my-label').click(function(){
		$(this).parent().toggleClass('active');
	});

	
});