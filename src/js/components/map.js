const maps = document.querySelectorAll('.js-map')
let mapObjects;

let iObserver = new IntersectionObserver(function(entries) {
	if (entries[0].isIntersecting === true) {
		loadMap();
	}
}, {threshold: [0]});

function initMapObjects() {
	ymaps
		.load()
		.then(maps => {
			mapObjects = new maps.Map('map', {
				center: [48.702269, 44.500922],
				zoom: 15,
				controls: ['zoomControl'],
			})
			mapObjects.behaviors.disable("scrollZoom");
		})
		.catch(error => console.log('Failed to load Yandex Maps', error));
}

function loadMap() {
	let initMap = false

	maps.forEach((item) => {
		if (!item.classList.contains("js--loaded")) {
			item.classList.add("js--loaded");
		}
	})

	if (!initMap) {
		if (typeof ymaps === "undefined") {
			let js = document.createElement('script');
			js.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
			document.getElementsByTagName('head')[0].appendChild(js);
			js.onload = function() {
				initMapObjects()
			};
		}

		initMap = true
	}
}

const init = () => {
	if (maps) {
		maps.forEach((itemMap) => {
			iObserver.observe(itemMap)
		})
	}
}

export default {
	init,
};

