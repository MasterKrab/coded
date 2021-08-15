const getReadTime = (text) => {
  const wordsPerMinute = 255
  // const words = text.split('[^A-Za-z]+').reduce((a, b) => a + b.length, 0)
  const regex = /\w+/g
  const words = text.match(regex).length

  const readingTimeSeconds = words / wordsPerMinute

  return Math.ceil(readingTimeSeconds)
}

export default getReadTime
