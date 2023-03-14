const init = () => {
	$('.js-to-anchor').on('click', function (e){
		e.preventDefault();
		e.stopPropagation();

		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
};

export default {
	init,
};
