$(document).ready(function () {
	$('.promo')
		.click(function() {
			var $promo = $(this);
			// A click on the div is the same as a click on the link itself.
			var href = $promo.find('.promoLink').attr('href');
			var $link = $promo.find('.promoLink');
			if ($link.hasClass('externalLink') || $link.hasClass('new-window')) {
				KIDS.utils.doLog('External promo');
			    NICKJR.links.external(href);
				return false;
			} else if ($link.hasClass('gated-new-window')) {
				KIDS.utils.doLog('Gated External promo');
				NICKJR.links.gatedNewWindow(href);
				return false;
			} else if ($link.hasClass('gated-overlay')) {
				KIDS.utils.doLog('Gated Overlay promo');
				NICKJR.links.gatedOverlay(href);
				return false;
			} else if ($link.hasClass('overlay')) {
				KIDS.utils.doLog('Overlay promo');
				NICKJR.links.overlay(href);
				return false;
			} else {
			    window.location = href;
			}
		})
		.hover(function() {
			$(this).addClass('hover');
		}, function() {
			$(this).removeClass('hover');
		});
});