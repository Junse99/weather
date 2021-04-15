export const getIcon = (temperature) => {
  
  const limit = parseInt(process.env.REACT_APP_LIMITTEMPERATURE)
  temperature = Math.round(parseFloat(temperature))

  if(temperature>=limit){
    return 'https://www.flaticon.com/svg/vstatic/svg/2698/2698213.svg?token=exp=1618177099~hmac=c08220636d79ce8305606343abef6eb9'
  }else{
    return 'https://www.flaticon.com/svg/vstatic/svg/1779/1779887.svg?token=exp=1618447995~hmac=87edf06b2a4b6689833bb900a88fe974'
  }
}