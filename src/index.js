const styles = `
  html {
    position: relative;
  }

  .nph-ctn {
    visibility: hidden;
  }

  .ph-ctn {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    overflow: hidden;
  }

  .ph-ctn::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    z-index: 1;
    width: 500%;
    margin-left: -250%;
    -webkit-animation: phAnimation 0.8s linear infinite;
            animation: phAnimation 0.8s linear infinite;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 54%) 50% 50%; }

  @keyframes phAnimation {
    0% { transform: translate3d(-30%, 0, 0); }
    100% { transform: translate3d(30%, 0, 0); }
  }

  .ph-item {
    background-color: #ced4da;
  }
`

const documentElement = document.documentElement
const body = document.body

function copyElementStyle(target, source) {
  const shouldCopy = [
    'border-radius'
  ]

  shouldCopy.forEach(item => {

    target.style[item] = getComputedStyle(source)[item]
  })
}

function createMask(ele) {
  const eleBoundingClientRect = ele.getBoundingClientRect()
  const eleScrollPos = {
    left: documentElement.scrollLeft,
    top: documentElement.scrollTop
  }

  const mask = document.createElement('div')

  copyElementStyle(mask, ele)

  mask.style.position = 'absolute'
  mask.style.top = `${eleScrollPos.top + eleBoundingClientRect.top}px`
  mask.style.left = `${eleScrollPos.left + eleBoundingClientRect.left}px`
  mask.style.width = `${eleBoundingClientRect.width}px`
  mask.style.height = `${eleBoundingClientRect.height}px`

  mask.classList.add('ph-ctn')

  const childrenEle = ele.querySelectorAll('.nph-item')

  childrenEle.forEach(item => {
    const childMask = document.createElement('div')

    copyElementStyle(childMask, item)

    childMask.style.position = 'absolute'
    childMask.style.top = `${item.offsetTop}px`
    childMask.style.left = `${item.offsetLeft}px`
    childMask.style.width = `${item.offsetWidth}px`
    childMask.style.height = `${item.offsetHeight}px`

    childMask.classList.add('ph-item')

    mask.appendChild(childMask)
  })

  body.appendChild(mask)

  return mask
}

class NewPlaceholder {
  constructor (ele) {
    this.ele = null
    this.mask = null

    if (!document.querySelector('#new-placeholder-style')) {
      document.head.insertAdjacentHTML('beforeend', `<style id="new-placeholder-style">${styles}</style>`)

      window.addEventListener('resize', () => {
        body.removeChild(this.mask)

        this.mask = createMask(this.ele)
      })
    }

    if (typeof ele === 'object') {
      this.ele = ele
    } else if (typeof ele === 'string') {
      this.ele = document.querySelector(ele)
    }

    if (!this.ele) {
      throw new Error('NewPlaceholder\' element must be a html element or an exist selector')
    } else {
      this.mask = createMask(this.ele)
    }
  }

  showPlaceholder (show) {
    if (show) {
      this.ele.style.visibility = 'hidden'
      this.mask.style.display = 'block'
    } else {
      this.ele.style.visibility = 'visible'
      this.mask.style.display = 'none'
    }
  }

  resize () {
    this.mask = createMask(this.ele)
  }
}

export default NewPlaceholder
