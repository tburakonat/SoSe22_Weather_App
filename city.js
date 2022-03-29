class City {
  constructor(
    lon,
    lat,
    desc,
    temp,
    humidity,
    windSpeed,
    cloudPercentage,
    name,
    country,
    icon,
    offset,
    feelsLike
  ) {
    this.longitude = lon;
    this.latitude = lat;
    this.description = desc;
    this.temperature = temp;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.cloudPercentage = cloudPercentage;
    this.name = name;
    this.country = country;
    this.icon = icon;
    this.offset = offset;
    this.feelsLike = feelsLike;
    this.forecast;
  }

  getTemperature() {
    return (Math.round((this.temperature - 273.15) * 100) / 100).toFixed(0);
  }

  getFeelsLike() {
    return (Math.round((this.feelsLike - 273.15) * 100) / 100).toFixed(0);
  }

  getLongitude() {
    return this.longitude;
  }

  getLatitude() {
    return this.latitude;
  }

  getDescription() {
    return this.description;
  }

  getHumidity() {
    return this.humidity;
  }

  getWindSpeed() {
    return this.windSpeed;
  }

  getCloudPercentage() {
    return this.cloudPercentage;
  }

  getCity() {
    return this.name;
  }

  getCountry() {
    return this.country;
  }

  setForecast(forecast) {
    this.forecast = forecast;
  }

  getForecast() {
    return this.forecast.slice(1);
  }

  getIcon() {
    return "https://openweathermap.org/img/wn/" + this.icon + "@2x.png";
  }

  getCurrentDay() {
    let allDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(this.datetime * 1000);
    let dayName = allDays[date.getDay()];
    return dayName;
  }

  getCurrentTime() {
    const localTime = new Date(
      (this.datetime + this.offset) * 1000
    ).toUTCString();
    let hours = localTime.slice(17, 19);
    let minutes = localTime.slice(20, 22);
    let suffix = "am";
    if (hours > 11) {
      suffix = "pm";
    }
    if (hours > 12) {
      hours -= 12;
    }
    return hours + ":" + minutes + " " + suffix;
  }

  isNight() {
    if (this.icon.slice(-1) == "n") {
      return true;
    }
    return false;
  }

  setDt(dt) {
    this.datetime = dt;
  }
}
