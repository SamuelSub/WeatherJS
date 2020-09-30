class Store {
  constructor() {
    
  }

  set(data) {
    localStorage.setItem('temp', data.temp);
    localStorage.setItem('feels-like', data.feelsLike);
    localStorage.setItem('humidity', data.humidity);
  }
}