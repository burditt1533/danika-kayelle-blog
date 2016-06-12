$(function(){

	$(document).on('click', '[data-behavior=loadMore]', function(e){
		e.preventDefault()
		var self = this;

		var href = $(self).parents('a').attr('href')

		$.get(href, function(data){
			var html = $(data).find('.ajax-posts').html()
			$('.ajax-posts').append(html);
		})

		$('[data-behavior=loadmore-link]').load(href + " [data-behavior=loadmore-link]")
	})
})
