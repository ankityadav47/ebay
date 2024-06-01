const apikey ="309b5d2e02ee4972bf5102337240905";
const apiurl="https://api.weatherapi.com/v1/current.json?key=";
// https://api.weatherapi.com/v1/current.json?key=309b5d2e02ee4972bf5102337240905&q=Goa&aqi=yes

const searchbox = document.querySelector("#search-bar");
const searchbtn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".cloud");
 async function checkWeather(city){
  const response = await fetch(apiurl+apikey+`&q=`+city+`&aqi=yes` );

  var data = await response.json();
console.log(data);
console.log(weatherIcon);
  document.querySelector(".city").innerHTML=data.location.name;
  document.querySelector('.temprature').innerHTML = Math.round(data.current.temp_c) + "°c";
  document.querySelector('#humval').innerHTML = data.current.humidity + '%';
  document.querySelector("#wival").innerHTML = data.current.wind_kph + "Km/h";
 

  if(data.current.condition.text == "Partly cloudy"){
    weatherIcon.src = "clouds.png";
    console.log(weatherIcon.src);
    console.log(data.current.condition.text)
   
      }
      else if(data.current.condition.text == "Clear"){
        weatherIcon.src = "clear.png";
        console.log(data.current.condition.text);
        weatherIcon.innerHTML = `<div class="cloud"><img src="clear.png" alt=""></div>`
       
      }
      else if(data.current.condition.text == "Sunny"){
              console.log(data.current.condition.text);
        weatherIcon.innerHTML=`<div class ="cloud"><img src="clear.png" ></div>`
      }
      else if(data.current.condition.text=="Mist"){
        weatherIcon.src="mist.png";
        console.log(data.current.condition.text);
        weatherIcon.innerHTML=`<div class ="cloud"><img src="mist.png" ></div>`
      }
      else if (data.current.condition.text=="Moderate or heavy rain with thunder"){
        weatherIcon.src = "drizzle.png";
        console.log(data.current.condition.text);
        weatherIcon.innerHTML=`<div class ="cloud"><img src="rain.png" ></div>`
      }
      
 }
 searchbtn.addEventListener("click",()=>{
  checkWeather(searchbox.value);
    document.querySelector(".container").style.display="block";
})






