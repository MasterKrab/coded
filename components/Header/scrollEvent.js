const scrollEvent = (setIsScrollUp) => {
  let lastScrollTop = 0

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop

    if (scrollTop <= 35 || scrollTop > lastScrollTop) {
      setIsScrollUp(false)
    } else {
      setIsScrollUp(true)
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  }

  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)
}

export default scrollEvent
