export const getDay = () => {
  const date = new Date()

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return date.toLocaleDateString('en-US', options)
}
