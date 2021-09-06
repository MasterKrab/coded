import monthsSlugs from 'utils/monthsSlugs'

const formatDate = (date) => {
  const [year, month, day] = date.split('-')

  const normalizedMonth = month.replace(/(^|-)0+/g, '$1')

  const normalizedDate = Date.parse(
    `${day} ${monthsSlugs[normalizedMonth]} ${year}`
  )

  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(normalizedDate)
}

export default formatDate
