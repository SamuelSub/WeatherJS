const weather = new Weather();


weather.getWeather('thessaloniki')
  .then(data => console.log(data))
  .catch(err => console.log(err));


