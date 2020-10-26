// Set appId
const appId = '3d3a987599d4c9917cb69d43602f3fc9';

// getDataForCity function that fetches weather info from openweathermap api
const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
  .then(response => response.json());

// createCardHtml function used to render the weather info 
const createCardHtml = (name, icon, temp, feelsLike, description, pressure, humidity, wind_speed, uv) => `
  <div class="card">
    <div class="row no-gutters align-items-center">    
      <div class="col-2 h2 pl-1 pt-1 text-center">                
        ${icon}
      </div>
      <div class="col-10">
        <div class="card-body">
          <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
            <h3>${name}</h3>
            <h5>${temp}c, feels like ${feelsLike}c</h5>
          </div>
          <div class="row">
            <h5 class="card-subtitle text-muted">${description}</h5>
          </div>
          <div class="row">
            <h5>Pressure: ${pressure} Mlb</h5>
        </div>
        <div class="row">
            <h5>Humidity: ${humidity} %</h5>
        </div> 
        <div class="row">
            <h5>Wind: ${wind_speed} m/s</h5>
        </div> 
        <div class="row">
            <h5>UV: ${uv} </h5>
        </div> 
        </div>
      </div>
    </div>
  </div>
`;

// emojis object used to find the right emoji from the icon code sent from the api
const icons = {
    '01d': '<img src="icons/01d.png">',
    '02d': '<img src="icons/02d.png">',
    '03d': '<img src="icons/03d.png">',
    '04d': '<img src="icons/04d.png">',
    '09d': '<img src="icons/09d.png">',
    '10d': '<img src="icons/10d.png">',
    '11d': '<img src="icons/11d.png">',
    '13d': '<img src="icons/13d.png">',
    '50d': '<img src="icons/50d.png">',
    '01n': '<img src="icons/01d.png">',
    '02n': '<img src="icons/02n.png">',
    '03n': '<img src="icons/03d.png">',
    '04n': '<img src="icons/04d.png">',
    '09n': '<img src="icons/09d.png">',
    '10n': '<img src="icons/10d.png">',
    '11n': '<img src="icons/11d.png">',
    '13n': '<img src="icons/13d.png">',
    '50n': '<img src="icons/50d.png">',
  };

// selecting all the things needed
const submitButton = document.querySelector('#submit-button');
const cityInput = document.querySelector('#newCityInput');
const weatherContainer = document.querySelector('#newCityCard');

// event listener for a click event on the "Go!" button
submitButton.addEventListener('click', () => {
  // get the city from the input field
  const city = cityInput.value;

  // get the weather data for the city
  getDataForCity(city)
    .then(data => {
      // get the data we need for our html from the response
      const name = data.name;
      const icon = icons[data.weather[0].icon];
      const temp = data.main.temp;
      const feelsLike = data.main.feels_like;
      const description = data.weather[0].description;
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;
      const wind_speed = data.main.wind;
      const uv = data.main.uv;

      // create the card html
      const cardHtml = createCardHtml(name, icon, temp, feelsLike, description, pressure, humidity, wind_speed, uv);

      // render!
      weatherContainer.innerHTML = cardHtml;
    });
});

//Audio//
let audio = document.getElementById ('#audio');
let playPauseBTN = document.getElementById ('#playPauseBTN');
let count = 0;

function playPause (){
  if(count == 0){
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Pause &#9208;";
  }else{
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9658;";
  }
}
function stop(){
  playPause()
  audio.pause();
  audio.currentTime = 0;
  playPauseBTN.innerHTML = "Play &#9658;";
  
};
