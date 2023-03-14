import lozad from 'lozad';

let observer;

const init = () => {
	observer = lozad('.js-lazy', {
		rootMargin: '10px 0px',
		threshold: 0.1,
		enableAutoReload: true,
		loaded(el) {
			el.classList.add('is-loaded');
		},
	});

	observer.observe();
};

/**
* @param {string} img
*/
const trigger = (img) => {
	observer.triggerLoad(img);
};

export default {
	init,
	trigger,
};
