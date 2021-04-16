export const getTheme = (theme, temperature) => {
  const limit = parseInt(process.env.REACT_APP_LIMITTEMPERATURE)
  switch (theme) {
    case 'cardFrance':
      return temperature>=limit ? 'containerFranceLight' : 'containerFranceDark'
    case 'cardDay':
      return temperature >= limit ? 'dayLight' : 'dayDark'
    case 'cardMain':
      return temperature >= limit ? 'container__mainLight' : 'container__mainDark'
    case 'main':
      return temperature >= limit ? 'backgroundLight' : 'backgroundDark'
  }
}