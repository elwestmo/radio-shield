<script>// radio shield 3a
// yet another fork (branch?) of radio-shield.js // adding hover and addtional clicked state / styles
$(document).ready(function(){
	var radioShield = {};
	
//	radio shield
	$('input[id^="PurpleOrGold"]').hide();
	$('label[for^="PurpleOrGold"]').addClass('fs22').addClass('georgia').addClass('radio-shield-label');
	$('.formRequired').eq(0).hide(); // -- this may need to be adjusted -- this is hiding the first required things requirement label (*), i'm assuming the shield radios are the first required on the page,

	$('label[for^="PurpleOrGold"]').css({
		'background': 'url(\'https://www.albion.edu/images/sites/websupport/shield/radio-shield-vert-20.png\') 0 0 no-repeat transparent',
		 'display' : 'inline-block',
		  'height': '26px',
		  'padding-left': '30px'
		});

	
	$('label[for^="PurpleOrGold"]').on('mouseenter', function(){
		if ( !$(this).hasClass('activeLabel') ){
			$(this).css({
				'background-position': '0 -26px'
			});
//		$(this).css({'color': '#6DC6E7'}); //a
		}
	});
	$('label[for^="PurpleOrGold"]').on('mouseout', function(){
		if ( !$(this).hasClass('activeLabel') ){
			$(this).css({
				'background-position': '0 0px'
			});
		//$(this).css({'color': '#685C53'}); //a
		}
	});

	$('label[for^="PurpleOrGold"]').on('mousedown', function(){
		//reset the all background images
		$('label[for^="PurpleOrGold"]').css({
			'background-position': '0 0px'
		}).removeClass('activeLabel');
		//move the current label's background image
		$(this).css({
			'background-position': '0 -52px'
		}).addClass('activeLabel');

		//$(this).css({});
		
		radioShield.clickedLink = $(this).attr('for'); //not used??
		$(this).prev().attr('checked', 'checked');
	});//on click
//	/radio shield


}); //	/document ready
</script>
