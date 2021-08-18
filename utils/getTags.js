const getTags = (posts) => {
  const storage = []

  posts.forEach(({ tags }) => {
    tags.forEach((tag) => !storage.includes(tag) && storage.push(tag))
  })

  return storage
}

export default getTags
