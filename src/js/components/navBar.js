const init = () => {
  const navBar = document.querySelector('.nav-bar')

	if (navBar) {
    const navBarBtn = navBar.querySelector('.nav-bar__button')
    navBarBtn.addEventListener('click', function(){
      document.querySelector('html').classList.toggle('is-navBar')
      navBar.classList.toggle('is-close')
    })
	}
}
export default {init};
