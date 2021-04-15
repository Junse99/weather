export const getCountry = (country = 'CO') => {

  switch (country) {
    case 'CO':
      return 'Colombia'
      
    case 'FR':
      return 'Francia'
  
    default:
      return country
  }
}