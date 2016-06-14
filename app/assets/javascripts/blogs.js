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

	


    // Smooth Horizontal Scroll with Mouse
    this.$container = $('[data-behavior=scroll-container]');
    var self = this;
    this.$container.on('mousewheel', function(event) {
    	event.preventDefault()

    	if (self.$container.scrollLeft() > 10){
	        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * 20 ) );
	        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaX * 10 ) );
	    }else{
	    	self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * 2 ) );
	        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaX * 0 ) );
	    }
    });

})
