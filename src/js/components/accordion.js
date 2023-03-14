const init = () => {
	const accHead = document.querySelectorAll('.accordion-head')

  const accVisible = (e) => {
    const accBody = e.nextElementSibling

    if (e.classList.contains("is-active")) {
      accBody.style.maxHeight = accBody.scrollHeight + 'px'
    } else {
      accBody.style.maxHeight = 0
    }
  }

	if (accHead) {
    accHead.forEach((item) => {
      accVisible(item)
			item.addEventListener('click', function () {
				this.classList.toggle('is-active')
        // this.closest('.accordion-item').classList.toggle('is-open')
        accVisible(this)
			})
		})
	}


}

export default { init };
