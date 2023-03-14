const init = () => {
	const showPass = document.querySelectorAll('[show-pass]')

  showPass.forEach(item => {
    item.addEventListener('click', function () {
      const input = this.previousElementSibling
      // if (input.disabled) return true
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }

    })
  })
}

export default {
	init,
};
