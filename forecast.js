class Day {
  constructor(temp, desc, windSpeed, cloudPercentage, icon, dt) {
    this.temperature = temp;
    this.description = desc;
    this.windSpeed = windSpeed;
    this.cloudPercentage = cloudPercentage;
    this.icon = icon;
    this.datetime = dt;
    this.hashmap = new Map([
      ["01d", "svgs/day.svg"],
      ["01n", "svgs/night.svg"],
      ["02d", "svgs/cloudy-day-3.svg"],
      ["02n", "svgs/cloudy-night-3.svg"],
      ["03d", "svgs/cloudy.svg"],
      ["03n", "svgs/cloudy.svg"],
      ["04d", "svgs/cloudy.svg"],
      ["04n", "svgs/cloudy.svg"],
      ["09d", "svgs/rainy-6.svg"],
      ["09n", "svgs/rainy-6.svg"],
      ["10d", "svgs/rainy-3.svg"],
      ["10n", "svgs/rainy-3.svg"],
      ["11d", "svgs/thunder.svg"],
      ["11n", "svgs/thunder.svg"],
      ["13d", "svgs/snowy-6.svg"],
      ["13n", "svgs/snowy-6.svg"],
      ["50d", "svgs/cloudy.svg"],
      ["50n", "svgs/cloudy.svg"],
    ]);
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
    return this.hashmap.get(this.icon);
  }
}
