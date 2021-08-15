import monthsSlugs from 'utils/monthsSlugs'

const formatUnit = (date) => (date < 10 ? `0${date}` : date)

const formatDate = (date) => {
  const [day, month, year] = date.split('-')

  const normalizedDate = Date.parse(
    `${formatUnit(day)} ${monthsSlugs[month]} ${year}`
  )

  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(normalizedDate)
}

export default formatDate
