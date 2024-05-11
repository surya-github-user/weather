const apikey = "6905c0fbb00b9cdc8cffbd97747e3549";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.getElementById('searchbox');
const searchbtn = document.getElementById('searchbutton')


 async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);
    var data = await response.json();
    document.getElementById('location').innerHTML = data.name;
    document.getElementById('celcius').innerHTML = Math.round(data.main.temp) + '°c'  ;
    document.getElementById('humidity').innerHTML = data.main.humidity +' %';
    document.getElementById('windspeed').innerHTML = data.wind.speed + 'km/h';
}
searchbtn.addEventListener('click',() =>{
    checkweather(searchbox.value)
})

