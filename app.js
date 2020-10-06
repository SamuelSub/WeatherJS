window.addEventListener('DOMContentLoaded', () => {
  ui.displayAfterRefresh(storage.get());
});

const searchCity = document.querySelector('#inputLarge');

const weather = new Weather();
const ui = new UI();
const storage = new Store();


let placesAutocomplete = places({
  appId: 'plOYZHPXK9IO',
  apiKey: '894ffa14b4bc2630622a1e4c50937c83',
  container: document.querySelector('#inputLarge')
})

// returns data if a suggestion is selected (more info in API Docs)
placesAutocomplete.on('change', function resultSelected(e) {
  weather.getWeather(e.suggestion.name)
  .then(data => {
    ui.displayWeather(data.main,data.name);
    const weatherStorage = new Store(data.main.temp,data.main.feels_like,data.main.humidity,data.name);
    weatherStorage.set();
  })
  .catch(err => console.log(err));
  searchCity.value = '';
});








