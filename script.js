const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "0fc5c450cf61691397ec44e45e53c0f6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmFoOAaNDxF94r9wm272r5NMlj2snk_5knq9OBm3hvsw&s";
            break;
        case 'Clear':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJS5AXWJqJYa4bntYJFHTdmNT4pxhg2_oSkl4WSMTCQ&s";
            break;
        case 'Rain':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKNr2XvqsWYSY6qt6Maj7N6cmyWwdHAVn4ZcQ96bexw&s";
            break;
        case 'Mist':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lET21BeEJn_Ob1fDj0015GHUs6C6AmcOiVtplfis7g&s";
            break;
        case 'Snow':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjC8OJBi_tufNmZhfGR-Tr1FOtlBOTxDqxlcBJWsnjKw&s";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});