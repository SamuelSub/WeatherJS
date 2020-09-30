class Store {
  constructor() {
    
  }

  set(data) {
    localStorage.setItem('temp', data.temp);
    localStorage.setItem('feels-like', data.feels_like);
    localStorage.setItem('humidity', data.humidity);
  }
}