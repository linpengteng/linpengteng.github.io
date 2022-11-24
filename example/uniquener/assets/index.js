document.querySelector('.coder-left').addEventListener('click', (event) => {
  if (event.target.hasAttribute('option-type') && event.target.hasAttribute('option-value')) {
    const type = event.target.getAttribute('option-type')
    const selectors = document.querySelectorAll(`[option-type="${type}"]`)

    for (const element of selectors) {
      element.classList.remove('active')
    }

    event.target.classList.add('active')
  }
})

document.querySelector('.search-button').addEventListener('click', (event) => {
  const search = document.querySelector('.search-input')
  const radix = +document.querySelector(`[option-type="radix"].active`)?.getAttribute('option-value')
  const random = document.querySelector(`[option-type="random"].active`)?.getAttribute('option-value')
  const runMode = document.querySelector(`[option-type="runMode"].active`)?.getAttribute('option-value')
  let runCount = +document.querySelector(`[option-type="runCount"].active`)?.getAttribute('option-value')

  if (search && radix && random && runMode && runCount) {
    if (runMode === 'reset') {
       document.querySelector(`.search-result-record`).innerHTML = ''
    }

    try {
      const value = search.value
      const placeholder = search.getAttribute('placeholder')
      const format = value || placeholder

      if (!format.trim()) {
        document.querySelector(`.search-result-record`).innerHTML = ''
        return
      }

      while (runCount-- > 0) {
        const element = document.createElement('div')

        element.classList.add('search-record-log')
        element.textContent = window.Uniquener({ 
          format: format,
          radix: radix, 
          random: random  
        })

        document.querySelector(`.search-result-record`).appendChild(element)
      }
    } catch (e) {
      const element = document.createElement('div')
      element.textContent = `throw Error:${e.message}`
      element.classList.add('search-record-log', 'error')
      document.querySelector(`.search-result-record`).appendChild(element)
    }
  }
})