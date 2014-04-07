/*
author 	: Bhargav Krishna yb (@ybbkrishna)
Date 	: April 05 2014
Full Screen api independent of browser.
*/
var THREEUtils = THREEUtils || {};
THREEUtils.FullScreen = THREEUtils.FullScreen || {};

var fs = THREEUtils.FullScreen;
fs.available = function() {
	var body = document.getElementsByTagName("body")[0];
	if(body.requestFullscreen || body.msRequestFullscreen||
		body.webkitRequestFullscreen || mozRequestFullscreen) {
		return true;
	}
	return false;
}
fs.request =function(elem) {
	var body = elem || document.documentElement;
	if(body.requestFullscreen) {
		body.requestFullscreen();
	}
	else if(body.msRequestFullscreen) {
		body.msRequestFullscreen();
	}
	else if(body.webkitRequestFullscreen) {
		body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	}
	else if(body.mozRequestFullScreen) {
		body.mozRequestFullScreen();
	}
	return true;
}

fs.activated = function() {
	if (!document.fullscreenElement &&  !document.mozFullScreenElement && 
		!document.webkitFullscreenElement && !document.msFullscreenElement ) {
		return false;
	}
	return true;
}
fs.cancel = function() {
	if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
}

fs.toggleFullScreen = function (elem) {
  if(this.available()) {
  	if(this.activated()) {
  		this.cancel();
  	}
  	else {
  		this.request(elem);
  	}
  }
}.bind(fs);
/*
params = {
	element : ,
	key : ,
	dblclick : 
}
*/
fs.bindKey = function(params) {
	var that = this;
	params = params || {};
	var elem = params.element || document.documentElement;
	var key = params.key || 'f';
	var keyCode = key.charCodeAt(0);
	var dblclick = params.dblclick !== undefined ? params.dblclick : false;
	var onKeyPress = function(event) {
		if( event.which !== keyCode )	return;
		this.toggleFullScreen(elem);
	}.bind(this);
	document.addEventListener('keypress', onKeyPress, false);
	dblclick && elem.addEventListener('dblclick', function(){
		that.toggleFullScreen(elem)
	}, false);
	return {
		unbind	: function(){
			document.removeEventListener('keypress', onKeyPress, false);
			dblclick && elem.removeEventListener('dblclick', function(){
				that.toggleFullScreen(elem)
			}, false);
		}
	};
}