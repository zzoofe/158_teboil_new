
const init = () => {
	const btnShowStat = document.querySelector('[show-statistics]')
  const paymentAgent = document.querySelector('[payment-agent]')
  const loadMore = document.querySelector('[data-load]')
  const copyLink = document.querySelector('[copy-link]')
  const checkItems = document.querySelectorAll('[data-check-item]')

  if(btnShowStat) {
    btnShowStat.addEventListener('click', function () {
      const tr = document.querySelectorAll('.table-statistics tr')
      tr.forEach(item => item.classList.remove('hidden'))
      this.remove()
    })
  }

  if(paymentAgent) {
    paymentAgent.addEventListener('click', function () {
      this.disabled = true
      this.nextSibling.classList.remove('is-hidden')
    })
  }

  if(loadMore) {
    loadMore.addEventListener('click', function (e) {
      e.preventDefault()
      const frame = document.querySelector('.frame')
      const child = frame.children
      let clone = frame.cloneNode(true);
      frame.appendChild(clone);
    })
  }

  if(copyLink) {
    copyLink.addEventListener('click', function (e) {
      const link = document.querySelector('[data-link]').href
      const el = this

      el.classList.add('is-copy')
      setTimeout(function (){
        el.classList.remove('is-copy')
      }, 2000)
    })
  }

  if(checkItems) {
    checkItems.forEach(item => {
      item.addEventListener('input', function () {
        let checkList = document.querySelectorAll('[data-check-item]:checked')
        if(checkList.length === 0) {
          this.checked = true
        }
      })
    })
  }
}

export default {
	init,
};
