const init = () => {
	const buttonOrder = document.querySelectorAll('[data-order]')
  const titleOrder = document.querySelectorAll('[data-order-title]')

	if (buttonOrder) {
    buttonOrder.forEach(item=>{
      item.addEventListener('click', function () {
        if(titleOrder) {
          titleOrder.forEach(title=> {
            title.textContent = this.dataset.title;
          })
        }
      })
    })
	}
}

export default {
	init,
};
