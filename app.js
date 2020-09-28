const searchCity = document.querySelector('#search-city');


const weather = new Weather();
const ui = new UI();

searchCity.addEventListener('keyup', function(e) {
  weather.getWeather(e.target.value)
  .then(data => {
    ui.displayWeather(data.main);
  })
  .catch(err => console.log());
  
})








