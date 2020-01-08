let navtoggler = function(item) {
	$('.content').hide();
	$('.content img').css('opacity', '0');
	$('.content img').css('right', '0');

	switch (item) {
		case '#home':
      stopAllAnimations()
			$('.main section').css('border-radius', '0 0 33px 33px');
			$('.main section').css('width', '90vw');
			$('.main section').css('margin', '0 5vw');
			window.homeT = setTimeout(() => {
				$('.content:nth-of-type(1)').show('slide');
			}, 500);
			break;

		case '#about':
			stopAllAnimations()
			$('.main section').css('border-radius', '0 100px 0% 100px');
			$('.main section p').css('opacity', '0');
			$('.main section p span').hide();
			$('.content:nth-of-type(2)').show('slide');
			window.aboutT = setTimeout(() => {
				$('.content:nth-of-type(2) h2').css('opacity', '0');
				setTimeout(() => {
					$('.content:nth-of-type(2)').show('slide');
					$('.content img').css('opacity', '1');
					$('.content img').css('right', '10vw');
					$('.main section p').css('opacity', '1');
					$('.main section p span').show('slide', 1000);
					setTimeout(() => {
						$('.content:nth-of-type(2) h2').css('opacity', '1');
					}, 200);
				}, 500);
			}, 500);
			break;

		case '#projects':
      stopAllAnimations()
			$('.main section').css('border-radius', '100px 0% 100px 0');
			window.projectT = setTimeout(() => {
				$('.content:nth-of-type(3)').show('slide');
			}, 500);
			break;

		case '#contact':
      stopAllAnimations()
			$('.main section').css('border-radius', '3in 3in 3in 0');
			window.contactT = setTimeout(() => {
				$('.content:nth-of-type(4)').show('slide');
			}, 500);
			break;

		default:
			break;
	}
};

function stopAllAnimations() {
  clearTimeout(window.homeT);
  clearTimeout(window.aboutT);
  clearTimeout(window.projectT);
  clearTimeout(window.contactT);
  $('.content:nth-of-type(2)').hide('slide');
}