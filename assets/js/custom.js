(function($) {

	"use strict";

	var metronalDemo = {};

	metronalDemo.preLoad = function(duration) {
		$('#pre-load').fadeOut(duration);
	};

	metronalDemo.replaceVHeight = function() {
		$('html').css({
			'height': $(window).height()
		});
	};

	$(window).on('load', function() {
		metronalDemo.preLoad(800);
	});

	$(window).on('resize', function() {
		metronalDemo.replaceVHeight();
	});

	$(document).ready(function() {
		metronalDemo.replaceVHeight();
	});

})(jQuery);