//Get elemnts 
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = data => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //desctructure propierties
    const {cityDets, weather} = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class)"display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    //update the nigth/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    //Conditional
    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else {
    //     timeSrc = 'img/night.svg'
    // }

    //Ternary operator, same result as conditional below 
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    //remove th d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

// script using funcitons
// const updateCity = async city => {

//     const cityDets = await getCity(city)
//     const weather = await getWeather(cityDets.Key)

//     return {
//         cityDets: cityDets,
//         weather: weather
//     }

//     //shorthand notation
//     return {cityDets, weather}

// };

cityForm.addEventListener('submit', e => {
    // prevent defaul action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();

    //update the ui with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));


    //set local storage
    localStorage.setItem('city', city)
});

if(localStorage.getItem('city')) {
    //update the ui with new city
    forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}