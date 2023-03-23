const init = () => {
	const burger = document.querySelector('[data-burger]')
  const user = document.querySelector('[data-user]')
  const asideLeft = document.querySelector('[data-aside-left]')
  const asideRight = document.querySelector('[data-aside-right]')
  const body = document.querySelector('body')

	if (burger) {
    burger.addEventListener('click', function () {
      asideLeft.classList.toggle('is-active')
    })
	}

  if (user) {
    user.addEventListener('click', function () {
      asideRight.classList.toggle('is-active')
    })
  }

  document.addEventListener( 'click', (e) => {
    const el = e.composedPath().includes(asideLeft);
    console.log(el)
    if(!el) {
      //asideLeft.classList.remove('is-active')
    }
  })
}

export default {
	init,
};
