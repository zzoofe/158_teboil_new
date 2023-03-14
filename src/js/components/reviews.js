const init = () => {
	const allReviews = document.querySelector('.js-all-reviews')
  const reviews = document.querySelectorAll('.reviews__item')

	if (allReviews) {
    allReviews.addEventListener('click', function () {
      reviews.forEach((item) => {
        item.style.display = "block"
      })
      this.remove()
    })
	}
}

export default {
	init,
};
