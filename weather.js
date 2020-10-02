class Weather {
  constructor() {
    this.apiKey = '8ce2307d648a19009bb832cfcb367cd6';  
  }

  async getWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);

    if(response.status === 404) {
      console.log('City Not found')
    } else {
      const responseData = await response.json();

      return responseData
    }
  }
}



