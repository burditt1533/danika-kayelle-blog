

$(function(){

	
	$('.image-container').mouseover(function(){
		$(this).find('.image-overlay').addClass('in')
	})

	$('.image-container').mouseout(function(){
		$(this).find('.image-overlay').removeClass('in')
	})


	if ($('.posts-container').length) {
		$('.scroller').css('display', 'inline');
		var ready = true;
		$('body').addClass('no-scroll')
		$('.site-container').css('height', '100vh');

	}else{
		$('.site-container').attr('style', 'background-attachment:fixed, scroll');
	}

})
