const init = () => {
  document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc)
  const classes = ['.dropdown', '.dropdown-menu', '.dropdown-toggle']
  const remove = (e, name) => e.classList.remove(name)
  const closeDropdown = () => classes.forEach(item => document.querySelectorAll(item).forEach(e => remove(e, 'is-active')))
  const items = document.querySelectorAll('[data-filter]')

  function dropDownFunc(dropDown) {
    dropDown.addEventListener('click', function (e) {
      const self = this
      e.preventDefault()
      if (this.nextElementSibling.classList.contains('is-active') === true) {
        closeDropdown()
      } else {
        closeDropdown()
        this.parentElement.classList.add('is-active')
        this.nextElementSibling.classList.add('is-active')
        this.classList.add('is-active')
      }
    })
  }

  window.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown') === null) {
      closeDropdown()
    }
  })

  if(items) {
    items.forEach(item => {
      item.addEventListener('click', function () {
        const parent = item.closest('.dropdown')
        const val = parent.querySelector('[radio-drop-value]')
        const arr = parent.querySelectorAll('[data-filter]')
        val.textContent = item.textContent
        arr.forEach(e=>e.classList.remove('is-active'))
        item.classList.add('is-active')
        closeDropdown()
      })
    })
  }
}
export default {
  init
};
