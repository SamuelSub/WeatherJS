class Store {
  constructor(temp,feels_like,humidity,city) {
    this.temp = temp;
    this.feels = feels_like;
    this.humidity = humidity;
    this.city = city;
  }

  set() {
    localStorage.setItem('temp', this.temp);
    localStorage.setItem('feels-like', this.feels);
    localStorage.setItem('humidity', this.humidity);
    localStorage.setItem('city', this.city);
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