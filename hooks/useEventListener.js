import { useEffect } from 'react'

const useEventListener = (type, handler, element = 'window') => {
  useEffect(() => {
    let normalizedElement

    if (typeof element === 'function') normalizedElement = element()
    else if (element === 'window') normalizedElement = window
    else if (element === 'document') normalizedElement = document

    normalizedElement.addEventListener(type, handler)
    return () => normalizedElement.removeEventListener(type, handler)
  })
}

export default useEventListener
