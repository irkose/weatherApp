// const cityCardManager = new cityCardManager(0);

// cityCardManager.load();

// cityCardManager.render();

// const newCityCard = document.querySelector('#newCityCard'); 

// const submitButton = document.querySelector('#submit-button');


// newCityInput.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const newCityInput = document.querySelector('#newCityInput'); 
   
//     const appId = '3d3a987599d4c9917cb69d43602f3fc9';

//     const getDataForCity = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=metric`)
//         .then(response => response.json());

//     // Get the weather data for the city
//     getDataForCity(city)
//         .then(data => {
//             // Get data for HTML from the response
//             const name = data.name;
//             const icon = icons[data.weather[0].icon];
//             const temp = data.main.temp;
//             const description = data.weather[0].description;
//             const pressure = data.main.pressure;
//             const humidity = data.main.humidity;
//             const wind_speed = data.main.wind;
//             const uv = data.main.uv;
//             // Create the card HTML
//             const cardHtml = createCardHtml(name, icon, temp, description, pressure, humidity, wind_speed, uv);
//             // Render
//             cityContainer.innerHTML = cardHtml; 
           
//         });    
//         cityCardManager.addCityCard(name, icon, temp, description,pressure, humidity, wind_speed, uv);

//         cityCardManager.save();

//         cityCardManager.render();

//         newCityInput.value = '';
// });

// const cityCardsList = document.querySelector('#cities-list');

// cityCardsList.addEventListener('click', (event) => {

//     if(event.target.classList.contains('delete-button')) {
//         const parentCity = event.target.parentElement.parentElement;
//         const cityId = Number(parentCity.dataset.cardId);

//         cityCardManager.getCityById(cityId);
//         cityCardManager.save();
//         cityCardManager.render();
//     }
// });

// //Audio//
// let audio = document.getElementById ('audio');
// let playPauseBTN = document.getElementById ('playPauseBTN');
// let count = 0;

// function playPause (){
//   if(count == 0){
//     count = 1;
//     audio.play();
//     playPauseBTN.innerHTML = "Pause &#9208;";
//   }else{
//     count = 0;
//     audio.pause();
//     playPauseBTN.innerHTML = "Play &#9658;";
//   }
// }
// function stop(){
//   playPause()
//   audio.pause();
//   audio.currentTime = 0;
//   playPauseBTN.innerHTML = "Play &#9658;";
  
// }
