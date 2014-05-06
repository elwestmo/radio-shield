<script>// radio shield 3a
// yet another fork (branch?) of radio-shield.js // adding a more noticible highlight on click
$(document).ready(function(){
	var radioShield = {};
	
//	radio shield
	$('input[id^="PurpleOrGold"]').hide();
	$('label[for^="PurpleOrGold"]').addClass('h3');
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
		}
	});
	$('label[for^="PurpleOrGold"]').on('mouseout', function(){
		if ( !$(this).hasClass('activeLabel') ){
			$(this).css({
				'background-position': '0 0px'
			});
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
		
		radioShield.clickedLink = $(this).attr('for');
		$(this).prev().attr('checked', 'checked');
	});//on click
//	/radio shield

// Purple and Gold Specific
$('label[for=\"PurpleOrGold1\"]').css({'color': '#D69D00'});
/*
// default - #685C53
$('label[for^=\"PurpleOrGold\"]').css({'color': '#685C53'});

// purple - #592041
$('label[for=\"PurpleOrGold0\"]').on('mouseenter', function(){
	$(this).css({'color': '#592041'});
});
$('label[for=\"PurpleOrGold0\"]').on('mouseout', function(){
	$(this).css({'color': '#685C53'});
});
// gold - #D69D00
$('label[for=\"PurpleOrGold1\"]').on('mouseenter', function(){
	$(this).css({'color': '#D69D00'});
});
$('label[for=\"PurpleOrGold1\"]').on('mouseout', function(){
	$(this).css({'color': '#685C53'});
});
*/
// /Purple and Gold Specific


}); //	/document ready
</script>
