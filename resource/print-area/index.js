const PrintArea = function (element, options) {
  if (!(this instanceof PrintArea)) {
    return new PrintArea(element, options)
  }

  this.options = Object.assign({}, options)
  this.element = this.getArea(element)
  this.init()
}

PrintArea.prototype = {
  init: function () {
    this.writeIframe('<html>' + this.getHead() + this.getBody() + '</html>')
  },

  getHead: function () {
    let content = ''
    const regex = /.+\.css(\?.+)?$/i
    const styles = document.querySelectorAll('style,link')
    for (let i = 0; i < styles.length; i++) {
      const style = styles[i]
      const mark = style.tagName
      const href = style.getAttribute('href')
      if (mark === 'STYLE' || (mark === 'LINK' && regex.test(href))) {
        content += styles[i].outerHTML
      }
    }
    content += '<style>\n@media print{\n@page {\n' + this.options.media.join(';\n') + '\n}\n}\n</style>'
    content += '<style>\n@media print{\n' + this.options.noPrint + '{\n display:none; \n}\n}\n</style>'
    content = '<head>' + content + '</head>'
    return content
  },

  getBody: function () {
    return '<body>' + this.element.outerHTML + '</body>'
  },

  getArea: function (area) {
    if (typeof area === 'string') {
      return document.querySelector(area)
    }
    if (area && typeof HTMLElement === 'object' && area instanceof HTMLElement) {
      return area
    }
    if (area && typeof area === 'object' && area.nodeType === 1 && typeof area.nodeName === 'string') {
      return area
    }
    return area.$el
  },

  writeIframe: function (content) {
    if (document.getElementById('id_print_iframe')) {
      document.body.removeChild(document.getElementById('id_print_iframe'))
    }
    const iframe = document.createElement('iframe')
    const cframe = document.body.appendChild(iframe)
    const cWindow = cframe.contentWindow || cframe.contentDocument
    const cDocument = cframe.contentDocument || cframe.contentWindow.document
    cframe.id = 'id_print_iframe'
    cframe.style = 'display: none;'
    cDocument.open()
    cDocument.write(content)
    cDocument.close()
    cframe.onload = () => {
      this.printIframe(cWindow)
    }
  },

  printIframe: function (frameWindow) {
    try {
      frameWindow.focus()
      try {
        if (!frameWindow.document.execCommand('print', false, null)) {
          frameWindow.print()
        }
      } catch (e) {
        frameWindow.print()
      }
      frameWindow.close()
    } catch (err) {
      console.err(err)
    }
  }
}

window.PrintArea = PrintArea