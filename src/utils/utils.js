// 防抖
export function debounce(fn, delay = 1000) {
  let timer = null

  return function (...args) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, args)
      clearTimeout(timer)
    }, delay)
  }
}

// 节流函数
export function throttle(fn, delay = 1000) {
  let timer = null
  let status = false

  return function (...args) {
    if (status) return
    status = true
    timer = setTimeout(() => {
      fn.apply(this, args)
      status = false
      clearTimeout(timer)
    }, delay)
  }
}

