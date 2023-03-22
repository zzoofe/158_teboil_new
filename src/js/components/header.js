const init = () => {
	const burger = document.querySelector('[data-burger]')
  const user = document.querySelector('[data-user]')
  const app = document.querySelector('.app')
  const body = document.querySelector('body')

	if (burger) {
    burger.addEventListener('click', function () {
      this.classList.toggle('is-active')
    })
	}
}

export default {
	init,
};
