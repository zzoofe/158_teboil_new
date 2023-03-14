const init = () => {
	const btnEdit = document.querySelector('[data-edit-profile]')
  const btnSave = document.querySelector('[data-save-profile]')
  const input = document.querySelectorAll('.form .form-input')
  const checkProfile = document.querySelector('.js-profile-check')


  const editInput = () => {
    input.forEach(item => {
      if(item.classList.contains('is-disabled')) return true
      item.disabled = false
      item.parentElement.classList.add('is-edit')
    })
  }

  const saveInput = () => {
    input.forEach(item => {
      if(item.classList.contains('is-disabled')) return true
      item.disabled = true
      item.parentElement.classList.remove('is-edit')
    })
  }

  if(btnEdit) {
    btnEdit.addEventListener('click', function () {
      this.disabled = true
      this.classList.add('is-disabled')
      btnSave.classList.remove('is-hidden')
      editInput()
    })
  }

  if(btnSave) {
    btnSave.addEventListener('click', function () {
      this.parentElement.remove()
      checkProfile.classList.remove('is-hidden')
      saveInput()
    })
  }
}

export default {
	init,
};
