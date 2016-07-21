

$(function(){

	$('.loves').click(function(e){
		e.preventDefault()

		var id = $('.show-wrap').data('id')
		var url = '/blogs/' + id + '/love'

		$.ajax({
			url: url,
			type: 'POST', 
			success: function(data){
				$('[data-behavior="likes-counter"]').html(data)
			}
		})
	})

	
	$('.image-container').on('mouseover', function(){
		// $(this).find('.image-overlay').addClass('in')
	})

	$('.image-container').on('mouseout', function(){
		// $(this).find('.image-overlay').removeClass('in')
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
