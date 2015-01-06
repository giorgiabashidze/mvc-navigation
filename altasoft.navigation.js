// 
// Altasoft Navigation Plugin - ajax based navigation for better UX and low traffic load
// 

(function () {

	var MainContentSelector = '#MainContent';

	var navigate = function (url, skipAnimation, fadeSelector) {

		$(document).trigger('navigating');

		try {
			hideContent();
		}
		catch (err) { }

		try {
			history.pushState(url, document.title, url);
			loadPage(url, skipAnimation, fadeSelector);
		}
		catch (err) {
			window.location.assign(url);
		}
	}

	function loadPage(url, skipAnimation, fadeSelector) {
		if (!url) return;

		if (!fadeSelector)
			fadeSelector = MainContentSelector;


		if (!skipAnimation)
			$(fadeSelector).fadeTo('fast', 0);

		$.ajax({
			url: url,
			type: "GET",
			headers: {
				"pageonly": true
			},
			success: function (data) {
				successDownloadPage(data)
			},
			error: function (err) {
				console.log('Fallback, error while loading page', err);
				window.location.assign(url);
			}
		});
	}

	function successDownloadPage(data) {
		setTimeout(function () {
			$(document).scrollTop(0);
			$(MainContentSelector).empty();
			$(MainContentSelector).append(data);
			$(MainContentSelector).fadeTo('fast', 1);
		}, 200);
	}



	onpopstate = function (event) {
		loadPage(event.state);
	}

	$(document).on('click', 'a', function () {
		var url = $(this).attr('href');

		if (url.indexOf('/') == 0) {
			navigate(url, false);

			return false;
		}
	});


	return navigate;
})();
