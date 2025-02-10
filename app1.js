const id = 'd402b1f079bbbedf6f26632094fbdcae'
const base_url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${id}`


const button = document.querySelector("button i")
const city = document.querySelector(".cname ")
const temp = document.querySelector(".temperature p")
const description = document.querySelector(".description p")
const cloud = document.getElementById("cloud")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")
let form = document.querySelector("form");
const valuesearch = document.getElementById("name")
let main = document.querySelector('main');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valuesearch.value != '') {
        searchWeather();
    }
});


const searchWeather = async () => {
    let url = `${base_url}&q=${valuesearch.value}`; // Fixed API URL
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    if (data.cod == 200) {
        city.querySelector('.cname img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        temp.querySelector('span').innerText=data.main.temp;
        cloud.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
        description.innerText = data.weather[0].description;
        city.querySelector('p').innerText= data.name;

    }
    else {
        main.classList.add('error');
        setTimeout(() => {
            main.classList.remove('error');
        }, 1000);
    }
    valuesearch.value = '';
}
const initApp = () => {
    valuesearch.value = 'Washington';
    searchWeather();
}
initApp();

