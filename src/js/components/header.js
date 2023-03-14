const init = () => {
	const burger = document.querySelector('.header__btnMenu')
  const nav = document.querySelector('.header__nav')
  const app = document.querySelector('.app')
  const body = document.querySelector('body')

	if (burger) {
    burger.addEventListener('click', function () {
      this.classList.toggle('is-active')
      nav.classList.toggle('is-show')
      body.classList.toggle('overflow-hidden')
      app.classList.toggle('is-show-menu')
    })
	}
}

export default {
	init,
};
