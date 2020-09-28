const temp = document.querySelector('.temp');
const feels = document.querySelector('.feels');
const humidity = document.querySelector('.humid');
const list = document.querySelector('.list-holder');

class UI {
  constructor() {

  }

  displayWeather(data) {
    if(data === undefined) {
      list.innerHTML = `<ul class="weather-list list-group">
      <li class="temp list-group-item d-flex justify-content-between align-items-center">
        Temperature: 
      </li>
      <li class="feels list-group-item d-flex justify-content-between align-items-center">
        Feels Like: 
      </li>
      <li class="humid list-group-item d-flex justify-content-between align-items-center">
        Humidity: 
      </li>
      </ul>`
    } else {
       list.innerHTML = `<ul class="weather-list list-group">
      <li class="temp list-group-item d-flex justify-content-between align-items-center">
        Temperature: ${data.temp}
      </li>
      <li class="feels list-group-item d-flex justify-content-between align-items-center">
        Feels Like: ${data.feels_like}
      </li>
      <li class="humid list-group-item d-flex justify-content-between align-items-center">
        Humidity: ${data.humidity}
      </li>
      </ul>`
      console.log(data);
    }
   
  }

}