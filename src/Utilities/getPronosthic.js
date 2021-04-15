export const getPronostic = (json=[]) => {

  let date;
  const info = {day1: {}, day2: {}, day3:{}}
  const list = json.payload?.list;

  list?.map((item) => {
    date = new Date(item.dt_txt);
    const dateNow = new Date(Date.now()).getDate();

    if((dateNow + 1) == date.getDate() && Object.keys(info.day1).length === 0){
      info.day1 = {...info.day1,
        date: date.toDateString(),
        temperature: item.main.temp,
        description: item.weather[0].description
      }
    }else if ((dateNow + 2) == date.getDate() && Object.keys(info.day2).length === 0){
      info.day2 = {...info.day2,
        date: date.toDateString(),
        temperature: item.main.temp,
        description: item.weather[0].description
      }
    }else if((dateNow + 3) == date.getDate() && Object.keys(info.day3).length === 0){
      info.day3 = {...info.day3,
        date: date.toDateString(),
        temperature: item.main.temp,
        description: item.weather[0].description
      }
    }
  });
  return info;
}