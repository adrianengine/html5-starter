var NS = NS || {};
NS.Site = (function(){
	'use strict';
	$(document).on('ready', function(){
		// @todo Write here the Javascript

		var NameSite = {
			init: function () {
				this.bindUIActions();
			},
			bindUIActions: function () {

				$('#id').on('click', function (e) {
					//actions
					e.preventDefault();
				});

				//GOOGLE ANALYTICS EVENTS
				$('.btn').on('click', function () {
					var title = $(this).text();

					ga('send', {
						'hitType': 'event',          // Required.
						'eventCategory': 'button',   // Required.
						'eventAction': 'click',      // Required.
						'eventLabel': 'Clic on: ' + title,
						'eventValue': 1
					});
				});
			}
		};

		NameSite.init();

	});

}());
