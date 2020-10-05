window.addEventListener('DOMContentLoaded', () => {
  ui.displayAfterRefresh(storage.get());
});

const searchCity = document.querySelector('#search-city');

const weather = new Weather();
const ui = new UI();
const storage = new Store();



searchCity.addEventListener('keyup', function(e) {
  weather.getWeather(e.target.value)
  .then(data => {
    ui.displayWeather(data.main,data.name);
    const saveLocally = new Store(data.main.temp,data.main.feels_like,data.main.humidity,data.name);
    saveLocally.set();
  })
  .catch(err => console.log());
  
})



let placesAutocomplete = places({
  appId: 'plOYZHPXK9IO',
  apiKey: '894ffa14b4bc2630622a1e4c50937c83',
  container: document.querySelector('#inputLarge')
});








