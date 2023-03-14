import IMask from 'imask';

const init = () => {
	const phone = document.querySelectorAll('[data-phone]')
  const maskOptions = {mask:'+{7} (000) 000-00-00'}
	if (phone) phone.forEach(item=>IMask(item, maskOptions))
}

export default {
	init,
};
