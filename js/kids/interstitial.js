// only possibly show the ad entry page if not in ad-free mode.
if (document.location.search.match(/[&?]af=1/) == null && document.location.search.match(/[&?]xid/) == null && document.location.search.match(/[&?]XID/) == null) {
	if (getCookieValue("adEntryPageShown")) {
		// the ad entry page has been shown, so do nothing.
	} else {
		// the ad entry page has not been shown, so show it and set the cookie.
		window.location.href = '/kids-ad-entry.html?url=' + window.location.pathname;		
		writeSessionCookie("adEntryPageShown", "true");
	}	
}