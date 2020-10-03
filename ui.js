
const list = document.querySelector('.list-holder');

class UI {
  constructor() {
    this.temp = document.querySelector('.temp');
    this.feels = document.querySelector('.feels');
    this.humid = document.querySelector('.humid');
    this.tempImg = document.querySelector('.temp-icon');
  }
  displayWeather(data,city) {
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
       <h2>${city}</h2>
      <li class="temp list-group-item d-flex justify-content-between align-items-center">
        Temperature: ${data.temp} 
      </li>
      <li class="feels list-group-item d-flex justify-content-between align-items-center">
        Feels Like: ${data.feels_like}
      </li>
      <li class="humid list-group-item d-flex justify-content-between align-items-center">
        Humidity: ${data.humidity}
      </li>
      </ul>`;
    }
  }

  changeBackground() {
    // document.body.style.background = '#4949FF';
    
    
  }

}