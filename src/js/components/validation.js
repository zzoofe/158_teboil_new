const errorMess = () => {
  return '<span class="flex items-center justify-end fs-15 fw-6 cl-red mt-10"><svg class="mr-7" width="16" height="16"><use xlink:href="./images/sprites.svg#i-1"></use></svg>Заполните поле</span>'
}

const errorInput = (e) => {
  if(e.classList.contains('is-error')) return true
  e.classList.add('is-error')
  e.insertAdjacentHTML('afterend', errorMess())
}

const validText = (e) => {
  if(e.value.length === 0) errorInput(e)
}

const validPhone = (e) => {
  if(e.value.length < 18) errorInput(e)
}

const valid = (e) => {
  e.forEach(item=>{
    if(item.dataset.valid === 'text') validText(item)
    if(item.dataset.valid === 'phone') validPhone(item)
  })
}

const init = () => {
  const btnEditPhone = document.querySelectorAll('[data-edit-phone]')
  const inputs = document.querySelectorAll('.form-input')
  const submit = document.querySelectorAll('[data-submit]')

  if(btnEditPhone) {
    btnEditPhone.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault()
        const inputPhone = this.closest('form').querySelector('[data-phone]')
        const value = inputPhone.value

        if (value.length < 18) errorInput(inputPhone)
      })
    })

  }

  if (inputs) {
    inputs.forEach(item => {
      item.addEventListener('input', function () {
        if(item.classList.contains('is-error')) {
          item.classList.remove('is-error')
          if(item.nextSibling) item.nextSibling.remove()
        }
      })
    })
  }

  if(submit) {
    submit.forEach(item=>{
      item.addEventListener('click', function (e) {
        e.preventDefault()
        const form = this.closest('form')
        const fields = form.querySelectorAll('[data-valid]')
        valid(fields)
      })
    })
  }
}

export default {
  init, errorInput,
};
