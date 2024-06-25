$(document).ready(playtimeDomInit);

var pt_el_Carousel,
	pt_NavLeaveTimer,
	pt_speed_Carousel = 800,
	pt_speed_Navigation = 1000,
	pt_animating = false;

function playtimeDomInit() {
	if ( PLAYTIME_LARGE_GAME ) {
		var el_topAd = $("#top-advertisement");
		
		$("body")
			.addClass("large-game-style");
		
		el_topAd.find("table")
			.attr("align", "");
		
		$(".tuneInContainerGames")
			.insertAfter("#headNavWrapper");

		$("<div />")
			.addClass("spacer")
			.insertAfter(el_topAd);

		$("<div />")
			.addClass("logo")
			.insertBefore(el_topAd);
		
		pt_el_Carousel = $("<div />")
			.addClass("carousel")
			.css("opacity", 0)
			.click(playtimeShowNavigation)
			.insertBefore(el_topAd);
		pt_el_Carousel
			.css("top", pt_el_Carousel.height());
		
		$("#headNavWrapper")
			.mouseenter(function() {
				if ( pt_NavLeaveTimer != null ) {
					clearTimeout(pt_NavLeaveTimer);
				}
			})
			.mouseleave(function() {
				if ( pt_NavLeaveTimer != null ) {
					clearTimeout(pt_NavLeaveTimer);
				}
				
				pt_NavLeaveTimer = setTimeout(playtimeHideNavigation, 2000);
			});

		pt_NavLeaveTimer = setTimeout(playtimeHideNavigation, 3000);
	}
}

function playtimeHideNavigation() {
	if ( pt_animating == true ) return;
	pt_animating = true;

	$("#headNavWrapper").animate({
		height: 0
	}, pt_speed_Navigation, function() {
		pt_el_Carousel.animate({
			top: 0,
			opacity: 1
		}, pt_speed_Carousel, function() { pt_animating = false; });
	});
}

function playtimeShowNavigation() {
	if ( pt_animating == true ) return;
	pt_animating = true;
		
	pt_el_Carousel.animate({
		top: pt_el_Carousel.height(),
		opacity: 0
	}, pt_speed_Carousel, function() {
		$("#headNavWrapper").animate({
			height: 175
		}, pt_speed_Navigation, function() { pt_animating = false; });
	});	
}