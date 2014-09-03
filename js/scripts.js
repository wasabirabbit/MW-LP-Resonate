$(document).ready(function() {

		
	$('.overlay').css({'opacity':0.8});
	$('.formboxpop').click(function(){
					$('.popup').css({'top': 0, 'left': 0 });
					$('.popup').position({
									my: 'center',
									at: 'center',
									of: window,
									offset: "0 "
								});

		$('.overlay').fadeIn();
		$('.popup').fadeIn();		
		$('html, body').animate({
			 scrollTop: 1
			}, 1000);	
	});
	
	$('.pop_close').click(function(){
		$('.overlay').fadeOut();
		$('.popup').fadeOut();
	});
});//END OF READY FINCTION
 



