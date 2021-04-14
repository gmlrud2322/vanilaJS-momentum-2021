const weather=document.querySelector(".js-weather");
const API_KEY="333501c73399a73609486f2e0176cbd6";
const COORDS='coords';

function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`${temperature}°C @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
       latitude,
       longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function hadleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,hadleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parseCoords=JSON.parse(loadedCoords);
       getWeather(parseCoords.latitude,parseCoords.longitude);
    }

}


function init(){
    loadCoords();
}
init();
