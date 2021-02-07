
// OpenWeather Info
const openWeatherKey = '45dc1d2e92f646d108fe518401d1e210';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getForecast = async () => {
  const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Render function
const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  //Using HTML template: 
  //const weatherContent = '<h2>' + weekDays[(new Date()).getDay()] + '</h2> <h2>Temperature: ' + ((day.main.temp - 273.15) * 9 / 5 + 32).toFixed(0) + '&deg;F</h2> <h2>Condition: ' + day.weather[0].description + '</h2> <img src="https://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png">'
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css('visibility', 'visible');
  //getVenues().then(venues => renderVenues(venues));
  getForecast().then(forecast => renderForecast(forecast));
  return false;
};


$submit.click(executeSearch);

  
  const createWeatherHTML = (currentDay) => {
    console.log(currentDay)
    var date= new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
    return `<h2>${weekDays[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</h2>
      <h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
      <h2>Condition: ${currentDay.weather[0].description}</h2>
      <img class = "weathericon" src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
      <h2>H: ${kelvinToFahrenheit(currentDay.main.temp_max)}&deg;F / ${kelvinToCelsius(currentDay.main.temp_max)}&deg;C</h2>
      <h2 >L: <span style="color:blue;">${kelvinToFahrenheit(currentDay.main.temp_min)}&deg;F </span>/<span style="color:blue;"> ${kelvinToCelsius(currentDay.main.temp_min)}&deg;C</span></h2>`;
  }
  
  const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
  const kelvinToCelsius = k => ((k - 273.15).toFixed(0));

  //how to get weather based on current location?
  //https://www.w3schools.com/html/html5_geolocation.asp