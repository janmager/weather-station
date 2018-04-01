var APPID = "2f54f03eb5d03a781a8a027174ca47e3";
var temp;
var loc;
var wind;
var humidity;
var desc;
var hpa;
var clouds;
var city;

var url = "http://api.openweathermap.org/data/2.5/weather?q=" + "Tokyo" + "&APPID=" + APPID + "&units=metric";
sendRequest(url);

function updateByGeo(lat, lon){
  var url = "http://api.openweathermap.org/data/2.5/weather?" + "lat=" + lat + "&lon=" + lon + "&APPID=" + APPID + "&units=metric";
  sendRequest(url);
}

function updateByManual(){
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APPID + "&units=metric";
  sendRequest(url);
}

function sendRequest(url){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather = {};
      weather.humidity = data.main.humidity;
      weather.wind = data.wind.speed;
      weather.desc = data.weather[0].description;
      weather.loc = data.name;
      weather.temp = Math.round(data.main.temp);
      weather.hpa = data.main.pressure;
      weather.clouds = data.clouds.all;
      update(weather);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function update(weather){
  wind.innerHTML = "Wind: " +  weather.wind + " m/s";
  humidity.innerHTML = "Humidity: " + weather.humidity + " %";
  loc.innerHTML = weather.loc;

  // switch(weather.desc){
  //   case "thunderstorm with light rain": weather.desc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.desc="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.desc="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.desc="lekka burza"; break;
  //   case "heavy thunderstorm": weather.desc="ciężka burza"; break;
  //   case "thunderstorm": weather.desc="burza"; break;
  //   case "ragged thunderstorm": weather.desc="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.desc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.desc="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.desc="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.desc="lekka mżawka"; break;
  //   case "drizzle": weather.desc="mżawka"; break;
  //   case "heavy intensity drizzle": weather.desc="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.desc="mocna mżawka"; break;
  //   case "drizzle rain": weather.desc="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.desc="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.desc="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.desc="mocna mżawka"; break;
  //   case "shower drizzle": weather.desc="mżawka"; break;
  //   case "light rain": weather.desc="lekki deszcz"; break;
  //   case "moderate rain": weather.desc="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.desc="silny deszcz"; break;
  //   case "very heavy rain": weather.desc="ulewa"; break;
  //   case "extreme rain": weather.desc="mocna ulewa"; break;
  //   case "freezing rain": weather.desc="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.desc="lekki deszcz"; break;
  //   case "shower rain": weather.desc="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.desc="lekki deszcz"; break;
  //   case "ragged shower rain": weather.desc="oberwanie chmury"; break;
  //   case "light snow": weather.desc="lekkie opady śniegu"; break;
  //   case "snow": weather.desc="śnieg"; break;
  //   case "heavy snow": weather.desc="duże opady śniegu"; break;
  //   case "sleet": weather.desc="śnieg z deszczem"; break;
  //   case "shower sleet": weather.desc="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.desc="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.desc="śnieg z deszczem"; break;
  //   case "light shower snow": weather.desc="lekki śnieg"; break;
  //   case "shower snow": weather.desc="śnieg"; break;
  //   case "heavy shower snow": weather.desc="śnieżyca"; break;
  //   case "mist": weather.desc="mgła"; break;
  //   case "smoke": weather.desc="mgła"; break;
  //   case "haze": weather.desc="mgła"; break;
  //   case "sand, dust whirls": weather.desc="wiry pyłowe"; break;
  //   case "fog": weather.desc="mgła"; break;
  //   case "sand": weather.desc="piasek"; break;
  //   case "dust": weather.desc="pylenie"; break;
  //   case "volcanic ash": weather.desc="pył wulkaniczny"; break;
  //   case "squalls": weather.desc="wichura"; break;
  //   case "clear sky": weather.desc="czyste niebo"; break;
  //   case "scattered clouds": weather.desc="rozproszone chmury"; break;
  //   case "few clouds": weather.desc="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.desc="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.desc="rozproszone chmury"; break;
  //   case "tropical storm": weather.desc="burza tropikalna"; break;
  //   case "hurricane": weather.desc="huragan"; break;
  //   case "cold": weather.desc="zimno"; break;
  //   case "hot": weather.desc="gorąco"; break;
  //   case "windy": weather.desc="wietrznie"; break;
  //   case "hail": weather.desc="grad"; break;
  //   case "calm": weather.desc="cisza"; break;
  //   case "light breeze": weather.desc="lekka bryza"; break;
  //   case "gentle breeze": weather.desc="delikatna bryza"; break;
  //   case "moderate breeze": weather.desc="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.desc="świeża bryza"; break;
  //   case "strong breeze": weather.desc="silny powiew"; break;
  //   case "high wind, near gale": weather.desc="silne wiatry"; break;
  //   case "gale": weather.desc="wichura"; break;
  //   case "severe gale": weather.desc="silna wichura"; break;
  //   case "storm": weather.desc="sztorm"; break;
  //   case "violent storm": weather.desc="gwałtowna burza"; break;
  //   case "hurricane": weather.desc="huragan"; break;
  // }
  desc.innerHTML = weather.desc;
  temp.innerHTML = weather.temp + "°C";
  // hpa.innerHTML = "Ciśnienie: " + weather.hpa + " hPa";
  clouds.innerHTML = "Clouds: " + weather.clouds + "  %";
}

function showPosition(position){
  updateByGeo(position.coords.latitude, position.coords.longitude);
}

temp = document.getElementById("temperature");
loc = document.getElementById("location");
wind = document.getElementById("wind");
humidity = document.getElementById("humidity");
hpa = document.getElementById("hpa");
clouds = document.getElementById("clouds");
desc = document.getElementById("description");

function getByActualLoc(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  }else{
    document.alert("You need to accept location sharing.");
  }
}

city = document.getElementById("manualWeather");

city.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        getByManualLoc();
    }
});

function getByManualLoc(){
  city = document.getElementById("manualWeather").value;
  updateByManual();
}

var option = true;
var option2 = true;
var option3 = true;

function SHOWgetByManualLoc()
{
  if(option3==true)
  {
    $(".search-weather").css({"display":"flex"});
    option3 = false;
  }
  else
  {
    $(".search-weather").css({"display":"none"});
    option3 = true;
  }
}

function showmore()
{
  if(option==true)
  {
    document.getElementById("game-name-show-more").innerHTML = "HIDE";
    $(".more-games").css({"display":"block"});
    option = false;
  }
  else
  {
    document.getElementById("game-name-show-more").innerHTML = "SHOW MORE";
    $(".more-games").css({"display":"none"});
    option = true;
  }
}

function showmoreWeather()
{
  if(option2==true)
  {
    document.getElementById("game-name-show-more2").innerHTML = "HIDE";
    $(".more-weather").css({"display":"block"});
    option2 = false;
  }
  else
  {
    document.getElementById("game-name-show-more2").innerHTML = "SHOW MORE";
    $(".more-weather").css({"display":"none"});
    option2 = true;
  }
}
