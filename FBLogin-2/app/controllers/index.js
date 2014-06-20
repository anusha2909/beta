//var cloud = require('ti.cloud');
//cloud.debug = true;
var fb = Alloy.Globals.fbModule;

fb.appid = '481284855336798';
fb.permissions = ['publish_stream', 'read_stream'];

fb.addEventListener('login', function(e) {
	if (e.success) {
		alert('Logged In');
	} else if (e.error) {
		alert("Error = " + e.error);
	} else if(e.cancelled) {
		alert("Cancelled");
	}
});

fb.addEventListener('logout', function(e) {
	if(e.success) {
		alert('Logged Out');
	}
});

$.fbBtn.style = fb.BUTTON_STYLE_WIDE;
$.index.open();
