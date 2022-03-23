class Day {
  constructor(temp, desc, windSpeed, cloudPercentage, icon, dt) {
    this.temperature = temp;
    this.description = desc;
    this.windSpeed = windSpeed;
    this.cloudPercentage = cloudPercentage;
    this.icon = icon;
    this.datetime = dt;
  }

  getTemperature() {
    return (Math.round((this.temperature - 273.15) * 100) / 100).toFixed(0);
  }

  getDescription() {
    return this.description;
  }

  getWindSpeed() {
    return this.windSpeed;
  }

  getCloudPercentage() {
    return this.cloudPercentage;
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
    let date = new Date(this.dt * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes;
  }

  getIcon() {
    return "https://openweathermap.org/img/wn/" + this.icon + "@2x.png";
  }
}
