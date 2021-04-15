export const getTheme = (theme, temperature) => {
  const limit = process.env.REACT_APP_LIMITTEMPERATURE
  switch (theme) {
    case 'cardFrance':
      console.log(temperature, limit)
      return temperature>=limit ? 'containerFranceLight' : 'containerFranceDark'
      
    case 'cardDay':
      return temperature >= limit ? 'dayLight' : 'dayDark'
    case 'cardMain':
      return temperature >= limit ? 'container__mainLight' : 'container__mainDark'
  }
}