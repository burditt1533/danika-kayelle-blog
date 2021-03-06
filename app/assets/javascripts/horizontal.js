

jQuery(function($){
	'use strict';

if ($('#basic').length) {

	// -------------------------------------------------------------
	//   Basic Navigation
	// -------------------------------------------------------------
	(function () {

		var mobile = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 1000;

		$('body').addClass('no-scroll')
		var $frame  = $('#basic');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		var options = {
    		horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 2000,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			forceCentered: 1,
			scrollTrap: true,
			activateMiddle: 1,
			keyboardNavBy: 'pages',

		    // Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		};

		var sly = new Sly('#basic', options).init();

	 //    $('#basic').on('mousewheel', function(event) {
	    		
	 //    	event.preventDefault()

		// })

		// function handleKeyDown(e) {
		// 	var ctrlPressed = 0;
		// 	var altPressed = 0;
		// 	var shiftPressed= 0;

		// 	var evt = (e==null ? event:e);

		// 	shiftPressed = evt.shiftKey;
		// 	altPressed   = evt.altKey;
		// 	ctrlPressed  = evt.ctrlKey;
		// 	self.status = ""
		// 	+  "shiftKey=" + shiftPressed 
		// 	+", altKey="   + altPressed 
		// 	+", ctrlKey="  + ctrlPressed 

		// 	if ((shiftPressed || altPressed || ctrlPressed) && (evt.keyCode == 81)) {

		// 		console.log('hello')
		// 		return true;
		// 	}
		// }

		// 	document.onkeydown = handleKeyDown;


		// $(document).keydown(function( event ) {

		//    event.preventDefault();
		//   if ( event.which == 39 ) {
		//    sly.next()
		//   }else if(event.which == 37) {
		//    sly.prev()
		//   }else if(event.which == 40) {
		//    sly.toStart()
		//   }else if(event.which == 38) {
		//    sly.toEnd()
		//   }

		// });

		sly.on('active', function () {

			var currentBlog = sly.getIndex($('li.active'));
			var loadedBlogs = this.items.length;
			var loadedBlogsMod = this.items.length - 4;
			var totalBlogs = $('.frame').data('count');
			var totalPages = sly.pages.length - 3
			var currentPage = sly.rel.activePage


			if (currentPage >= totalPages && totalBlogs > loadedBlogs) {

				    	var href = $('.next_page').attr('href');

						$.get(href, function(data){
							var html = $(data).find('.frame ul li')
							var paginate = $(data).find('.pagination').html()

							html.each(function(){
								sly.add('<li>' + $(this).html() + '</li>');
							})
							$('.pagination').html(paginate)
						});


			} else {

			}

		})

		// Add item
		// $('.add').on('click', function () {
		// 	sly.add('<li>' + '$slidee.children().length' + '</li>');
		// });

		// Remove item
		// $('.remove').on('click', function () {
		// 	$frame.sly('remove', -1);
		// });



		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toStart();
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toCenter();
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			sly.toEnd();
		});




	}());



if (false)
	// -------------------------------------------------------------
	//   Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#centered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'centered',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 4,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Force Centered Navigation
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#forcecentered');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Items
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#cycleitems');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: 'items',
			cycleInterval: 1000,
			pauseOnHover: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});

		// Pause button
		$wrap.find('.pause').on('click', function () {
			$frame.sly('pause');
		});

		// Resume button
		$wrap.find('.resume').on('click', function () {
			$frame.sly('resume');
		});

		// Toggle button
		$wrap.find('.toggle').on('click', function () {
			$frame.sly('toggle');
		});
	}());

	// -------------------------------------------------------------
	//   Cycle By Pages
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#cyclepages');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Cycling
			cycleBy: 'pages',
			cycleInterval: 1000,
			pauseOnHover: 1,
			startPaused: 1,

			// Buttons
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// Pause button
		$wrap.find('.pause').on('click', function () {
			$frame.sly('pause');
		});

		// Resume button
		$wrap.find('.resume').on('click', function () {
			$frame.sly('resume');
		});

		// Toggle button
		$wrap.find('.toggle').on('click', function () {
			$frame.sly('toggle');
		});
	}());

	// -------------------------------------------------------------
	//   One Item Per Frame
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#oneperframe');
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
	}());

	// -------------------------------------------------------------
	//   Crazy
	// -------------------------------------------------------------
	(function () {
		var $frame  = $('#crazy');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			pagesBar: $wrap.find('.pages'),
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			forward: $wrap.find('.forward'),
			backward: $wrap.find('.backward'),
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next'),
			prevPage: $wrap.find('.prevPage'),
			nextPage: $wrap.find('.nextPage')
		});

		// To Start button
		$wrap.find('.toStart').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the start of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toStart', item);
		});

		// To Center button
		$wrap.find('.toCenter').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the center of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toCenter', item);
		});

		// To End button
		$wrap.find('.toEnd').on('click', function () {
			var item = $(this).data('item');
			// Animate a particular item to the end of the frame.
			// If no item is provided, the whole content will be animated.
			$frame.sly('toEnd', item);
		});

		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + $slidee.children().length + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
	}());


}
});
