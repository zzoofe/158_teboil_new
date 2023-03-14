const scroll = (phone) => {
  window.addEventListener('scroll', function() {
    const topInner = window.pageYOffset
    const topFooter = document.querySelector('.footer')
    const height = document.querySelector('.app').scrollHeight
    const stopY = (height - 800)

    if (topInner >= 200 && stopY > topInner) {
      phone.style.opacity = '1'
      phone.style.visibility = 'visible'
    } else {
      phone.style.opacity = '0'
      phone.style.visibility = 'hidden'
    }
  });
}

const init = () => {
	const phone = document.querySelector('.fix-phone')

	if (phone) {
      scroll(phone)
	}
}

export default {
	init,
};
