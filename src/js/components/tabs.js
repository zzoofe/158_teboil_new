const visibleTabBox = (e) => {
	const parent = e.closest('.tab-frame')

	if (parent) {
		const boxes = parent.querySelectorAll('.tab-box')
		const tab = e.dataset.tab

		boxes.forEach((box) => {
			if (tab === box.dataset.tab) {
				box.classList.remove('hidden')
			} else {
				box.classList.add('hidden')
			}
		})
	}
}

const activeTab = (e, tabs) => {
	tabs.forEach(tab => tab.classList.remove('is-active'))
	e.classList.add('is-active')
}

const init = () => {
  const tabs = document.querySelectorAll('li[data-tab]')

	if (tabs) {
		tabs.forEach((tab) => {
			tab.addEventListener('click', function () {
				activeTab(this, tabs)
				visibleTabBox(this)
			})
		})
	}
}

export default {
	init,
};
