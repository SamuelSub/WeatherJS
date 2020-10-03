class Store {
  constructor() {
    
  }

  set(data,city) {
    localStorage.setItem('temp', data.temp);
    localStorage.setItem('feels-like', data.feels_like);
    localStorage.setItem('humidity', data.humidity);
    localStorage.setItem('city',city);
  }

  get() {
    const temp = localStorage.getItem('temp');
    const feels_like = localStorage.getItem('feels-like');
    const humidity = localStorage.getItem('humidity');
    const city = localStorage.getItem('city');
    return {
      temp,
      feels_like,
      humidity,
      city
    }
  }
}