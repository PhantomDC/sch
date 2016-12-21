$(document).ready(function(){

	$(".sections").fullpage({
		lockAnchors:true,
		loopBottom:false,
		loopTop: false,
		paddingTop : "165px",
		fixedElements: ".mnu_top"
	});


	var slider = $(".page3_slider"); 

	slider.owlCarousel({
		items: 1,
		// autoplay: true,
		loop: true,
		navContainer : "<img class='next'>"
	});

	$(".slider_nav img").on("click",function(){

		if($(this).hasClass("prev")){
			slider.trigger('prev.owl.carousel', [300]);
		}
		if($(this).hasClass("next")){
			slider.trigger('next.owl.carousel', [300]);
		}

	});

});