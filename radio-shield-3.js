// radio shield 3
// yet another fork of radio-shield.js
$(document).ready(function(){
	var radioShield = {};
	$('.ed-noscript').css({'display': 'none'})
//	radio shield
	$('input[id^="eventChoice"]').hide();
	$('label[for^="eventChoice"]').addClass('h3');

	$('label[for^="eventChoice"]').css({
		'background': 'url(\'https://www.albion.edu/images/sites/websupport/shield/radio-shield-vert-20.png\') 0 0 no-repeat transparent',
		 'display' : 'inline-block',
		  'height': '26px',
		  'padding-left': '30px'
		});

	
	$('label[for^="eventChoice"]').on('mouseenter', function(){
		if ( !$(this).hasClass('activeLabel') ){
			$(this).css({
				'background-position': '0 -26px'
			});
		}
	});
	$('label[for^="eventChoice"]').on('mouseout', function(){
		if ( !$(this).hasClass('activeLabel') ){
			$(this).css({
				'background-position': '0 0px'
			});
		}
	});

	$('label[for^="eventChoice"]').on('mousedown', function(){
		//reset the all background images
		$('label[for^="eventChoice"]').css({
			'background-position': '0 0px'
		}).removeClass('activeLabel');
		//move the current label's background image
		$(this).css({
			'background-position': '0 -52px'
		}).addClass('activeLabel');
		
		radioShield.clickedLink = $(this).attr('for');
		$(this).prev().attr('checked', 'checked');

		





		// append matching p to clickedLink
		$('[class^="details-insert-"]').remove();
		radioShield.currentThing = '<div class="details-insert-' + radioShield.clickedLink + '" style="display:none;">' + $("." + radioShield.clickedLink + "-event-details").html() + "</div>";
		$(this).after( radioShield.currentThing );
		$('[class^="details-insert-"]').fadeIn().css({'margin-left': '30px'});
		// /append matching p to clickedLink

	});//on click
//	/radio shield