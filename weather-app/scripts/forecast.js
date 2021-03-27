class Forecast { 
    constructor() {
        this.key = '8OPaQDOJ2AV9iAfDFgHt1ntIKQ27UsNG';
        this.cityURI  = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.wheatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }

    async updateCity (city) {
        const cityDets = await this.getCity(city)
        const weather = await this.getWeather(cityDets.Key)

        //return {
            //cityDets: cityDets,
            //weather: weather
        //}

        //shorthand notation
        return {cityDets, weather}
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.wheatherURI + query);
        const data = await response.json();

        return data[0];
    }

    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    }
}



// Script using functions
//const key = '8OPaQDOJ2AV9iAfDFgHt1ntIKQ27UsNG';

//get weather information
// const getWeather =  async id => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     console.log('getWeather', data)

//     return data[0];
// }

//get city information
// const getCity = async city => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     console.log('getCity', data)

//     return data[0];
// }


// Harcoding script
// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data);
//     })
// .catch(err => console.log(err));