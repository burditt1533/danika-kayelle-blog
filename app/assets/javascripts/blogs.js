var postContainerWidth = function(){
		var length = $('.posts-wrap').length
		var width = 500 * length
		$('.posts-container').css('width', width )
		console.log(length)
	}

$(function(){

	postContainerWidth();
	



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




		// $('.scroller').draggable({ 
		// 	axis: "x",
		// 	drag: function() {
		// 		var scrollPosition = $('.scroller')[0].offsetLeft

		// 		this.$container = $('[data-behavior=scroll-container]');
		// 		var self = this;
		// 	    self.$container.scrollLeft( self.$container.scrollLeft() + ( scrollPosition * 4 ) - 20 );

		// 		console.log(scrollPosition)
		//    }
		// });

		$(document).mousemove(function(event){ 
	        var theX = event.pageX;
	        var theY = event.pageY;
	        var wWidth = $(window).width();
	        var wHeight = $(window).height();

	        // Smooth Horizontal Scroll with Mouse
	    $container = $('[data-behavior=scroll-container]');


	        if(theX > wWidth/1.3){
		        console.log(theX)
		         $container.scrollLeft( $container.scrollLeft() + ( 40 ) );
		    }else if (theX < wWidth/6){
		    	$container.scrollLeft( $container.scrollLeft() - ( 40 ) );
		    	console.log(theX + " back")
		    }
	    })


		
	    // Smooth Horizontal Scroll with Mouse
	    this.$container = $('[data-behavior=scroll-container]');
	    var self = this;

	    this.$container.on('mousewheel', function(event) {
	    	console.log('wheel')
	    	event.preventDefault()

	    	if (self.$container.scrollLeft() > 10){
		        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * 20 ) );
		        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaX * 10 ) );
		    }else{
		    	self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * 2 ) );
		        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaX * 1 ) );
		    }

		    
		    $('.scroller').css('left', self.$container.scrollLeft()/17)



		    	var length = $('.posts-wrap').length
				var width = 500 * length
				var offset = width - 2000
				var count = $('.posts-container').data('count')

			if (length < count) {

			    if (ready && self.$container.scrollLeft() >= offset) {
			    	ready = false;

			    	var href = $('.next_page').attr('href')

					$.get(href, function(data){
						var html = $(data).find('.ajax-posts').html()
						$('.ajax-posts').append(html);
						postContainerWidth();
					});

					$('.pagination').load(href + " .pagination");


			    	//wait 1 second for alerts to load
	              setTimeout(function(){
	                ready = true
	              }, 1000);

			    }
			}


	    });
	}else{
		$('.site-container').attr('style', 'background-attachment:fixed, scroll');
	}

})
