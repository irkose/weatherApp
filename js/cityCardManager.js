
// // Create function to render the weather info
// const createCardHtml = (id, name, icon, temp, description, pressure, humidity, wind_speed, uv) => `
//     <div class="card">
//         <div class="row no-gutters align-items-center" data-card-id=${id}>    
//             <div class="col-2 h2 pl-1 pt-1 text-center">                
//                 ${icon}
//             </div>
//             <div class="col-10">
//                 <div class="card-body">
//                     <div class="row card-title justify-content-between align-items-center mr-3 mb-1">
//                         <h3>${name}</h3>
//                         <h5>${temp} C</h5>
//                     </div>
//                     <div class="row">
//                         <h5">${description}</h5>
//                     </div>
//                     <div class="row">
//                         <h5>Pressure: ${pressure} Mlb</h5>
//                     </div>
//                     <div class="row">
//                         <h5>Humidity: ${humidity} %</h5>
//                     </div> 
//                     <div class="row">
//                         <h5>Wind: ${wind_speed} m/s</h5>
//                     </div> 
//                     <div class="row">
//                         <h5>UV: ${uv} </h5>
//                     </div> 
//                 </div>
//             </div>
//         </div>
//     </div>
// `;
// const icons = {
//   '01d': '<img src="icons/01d.png">',
//   '02d': '<img src="icons/02d.png">',
//   '03d': '<img src="icons/03d.png">',
//   '04d': '<img src="icons/04d.png">',
//   '09d': '<img src="icons/09d.png">',
//   '10d': '<img src="icons/10d.png">',
//   '11d': '<img src="icons/11d.png">',
//   '13d': '<img src="icons/13d.png">',
//   '50d': '<img src="icons/50d.png">',
//   '01n': '<img src="icons/01d.png">',
//   '02n': '<img src="icons/02n.png">',
//   '03n': '<img src="icons/03d.png">',
//   '04n': '<img src="icons/04d.png">',
//   '09n': '<img src="icons/09d.png">',
//   '10n': '<img src="icons/10d.png">',
//   '11n': '<img src="icons/11d.png">',
//   '13n': '<img src="icons/13d.png">',
//   '50n': '<img src="icons/50d.png">',
// };

        
// class CityCardManager {
//     constructor (currentId = 0) {
//         this.cityCards = [];
//         this.savedCards = [];
//         this.currentId = currentId;
//     };
    
//     addCityCard(name, temperature, description, pressure, humidity, wind_speed, uv) {
//         const cityCard = {
//             id: this.currentId++,
//             icon: icon,
//             name: name,
//             temperature: temperature,
//             description: description,
//             pressure: pressure,
//             humidity: humidity,
//             wind_speed: wind_speed, 
//             uv: uv
//         };
//         this.cityCards.push(cityCard);
//     };
    
//     deleteCityCard(cityId) {
//         const savedCities = [];
    
//         for(let i = 0; i < this.cityCards.length; i++) {
//             const city = this.cityCards[i];
//             if(city.id !== cityId) {
//                 savedCities.push(city);
//             };
//         };
//         this.cityCards = savedCities;
//     };

//     getCityById(cityId) {
//         let foundCity = '';
    
//         for (let i = 0; i < this.cityCards.length; i++) {
//             const city = this.cityCards[i];
//             if (city.id === cityId) {
//                 foundCity = city;
//             };
//         };
//         return foundCity;
//     };

//     render() {
//         const cityHtmlList = [];
        
//         for(let i = 0; i < this.cityCards.length; i++) {
//                 const card = this.cityCards[i];
//                 const renderHtml = createCardHtml(card.id, card.icons, card.name, card.description, card.pressure, card.humidity, card.wind_speed, card.uv);
//                 cityHtmlList.push(renderHtml);
//         };  
//         const cityCardsHtml = cityHtmlList.join('\n');
//         const cityCardsList = document.querySelector('#cities-list');
//         cityCardsList.innerHTML = cityCardsHtml;
//     };

// //     save() {
// //         const cityCardsJson = JSON.stringify(this.cityCards);
// //         localStorage.setItem('cities', cityCardsJson);
// //         // localStorage.removeItem('cities');

// //         const currentId = JSON.stringify(this.currentId);
// //         localStorage.setItem('currentId', currentId);
// //     };

// //     load() {
// //         if(localStorage.getItem('cities')) {
// //             const cityCardsStr = localStorage.getItem('cities');
// //             this.cityCards = JSON.parse(cityCardsStr);            
// //         };
// //         if(localStorage.getItem('currentId')) {
// //             const currentIdStr = localStorage.getItem('currentId');
// //             this.currentId = JSON.parse(currentIdStr);
// //         };
// //     };
// // };