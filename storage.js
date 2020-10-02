class Store {
  constructor() {
    
  }

  set(data) {
    localStorage.setItem('temp', data.temp);
    localStorage.setItem('feels-like', data.feels_like);
    localStorage.setItem('humidity', data.humidity);
  }

  get() {
    const temp = localStorage.getItem('temp');
    const feels_like = localStorage.getItem('feels-like');
    const humidity = localStorage.getItem('humidity');
    return {
      temp,
      feels_like,
      humidity
    }
  }
}