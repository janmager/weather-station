var APPIDD = "2f54f03eb5d03a781a8a027174ca47e3";
var soonTemp;
var weatherDateDay;
var weatherDateMonth;
var weatherDateHour;
var weatherDateMin;
var soonDesc;

var soonTemp2;
var weatherDateDay2;
var weatherDateMonth2;
var weatherDateHour2;
var weatherDateMin2;
var soonDesc2;

var soonTemp3;
var weatherDateDay3;
var weatherDateMonth3;
var weatherDateHour3;
var weatherDateMin3;
var soonDesc3;

var soonTemp4;
var weatherDateDay4;
var weatherDateMonth4;
var weatherDateHour4;
var weatherDateMin4;
var soonDesc4;

var soonTemp5;
var weatherDateDay5;
var weatherDateMonth5;
var weatherDateHour5;
var weatherDateMin5;
var soonDesc5;

var soonTemp6;
var weatherDateDay6;
var weatherDateMonth6;
var weatherDateHour6;
var weatherDateMin6;
var soonDesc6;

var url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + "Tokyo" + "&APPID=" + APPID + "&units=metric";
sendRequest2(url2);

function updateByGeo2(lat, lon){
  var url2 = "http://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&APPID=" + APPID + "&units=metric";
  sendRequest2(url2);
}

function updateByManual2(){
  var url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + APPID + "&units=metric";
  sendRequest2(url2);
}

function sendRequest2(url2){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var data = JSON.parse(xmlhttp.responseText);
      var weather2 = {};
      weather.soonTemp = Math.round(data.list[0].main.temp);
      weather.weatherDateDay = timeConverterDay(data.list[0].dt);
      weather.weatherDateMonth = timeConverterMonth(data.list[0].dt);
      weather.weatherDateHour = timeConverterHour(data.list[0].dt);
      weather.weatherDateMin = timeConverterMin(data.list[0].dt);
      weather.soonDesc = data.list[0].weather[0].description;

      weather.soonTemp2 = Math.round(data.list[1].main.temp);
      weather.weatherDateDay2 = timeConverterDay(data.list[1].dt);
      weather.weatherDateMonth2 = timeConverterMonth(data.list[1].dt);
      weather.weatherDateHour2 = timeConverterHour(data.list[1].dt);
      weather.weatherDateMin2 = timeConverterMin(data.list[1].dt);
      weather.soonDesc2 = data.list[1].weather[0].description;

      weather.soonTemp3 = Math.round(data.list[2].main.temp);
      weather.weatherDateDay3 = timeConverterDay(data.list[2].dt);
      weather.weatherDateMonth3 = timeConverterMonth(data.list[2].dt);
      weather.weatherDateHour3 = timeConverterHour(data.list[2].dt);
      weather.weatherDateMin3 = timeConverterMin(data.list[2].dt);
      weather.soonDesc3 = data.list[2].weather[0].description;

      // 3 DAYS
      weather.soonTemp4 = Math.round(data.list[4].main.temp);
      weather.weatherDateDay4 = timeConverterDay(data.list[4].dt);
      weather.weatherDateMonth4 = timeConverterMonth(data.list[4].dt);
      weather.weatherDateHour4 = timeConverterHour(data.list[4].dt);
      weather.weatherDateMin4 = timeConverterMin(data.list[4].dt);
      weather.soonDesc4 = data.list[4].weather[0].description;

      weather.soonTemp5 = Math.round(data.list[12].main.temp);
      weather.weatherDateDay5 = timeConverterDay(data.list[12].dt);
      weather.weatherDateMonth5 = timeConverterMonth(data.list[12].dt);
      weather.weatherDateHour5 = timeConverterHour(data.list[12].dt);
      weather.weatherDateMin5 = timeConverterMin(data.list[12].dt);
      weather.soonDesc5 = data.list[12].weather[0].description;

      weather.soonTemp6 = Math.round(data.list[20].main.temp);
      weather.weatherDateDay6 = timeConverterDay(data.list[20].dt);
      weather.weatherDateMonth6 = timeConverterMonth(data.list[20].dt);
      weather.weatherDateHour6 = timeConverterHour(data.list[20].dt);
      weather.weatherDateMin6 = timeConverterMin(data.list[20].dt);
      weather.soonDesc6 = data.list[20].weather[0].description;
      update2(weather2);
    }
  };
  xmlhttp.open("GET", url2, true);
  xmlhttp.send();
}

function timeConverterDay(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  // var months = ['sty','lut','Mar','kwi','maj','cze','lip','sie','wrz','paź','lis','gru'];
  // var year = a.getFullYear();
  // var month = months[a.getMonth()];
  var date = a.getDate();
  // var hour = a.getHours();
  // if(hour<10) hour = "0" + hour;
  // var min = a.getMinutes();
  // if(min<10) min = "0" + min;
  // var sec = a.getSeconds();
  // if(sec<10) sec = "0" + sec;
  // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  // return time;
  return date;
}

function timeConverterMonth(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
  var month = months[a.getMonth()];
  return month;
}

function timeConverterHour(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  if(hour<10) hour = "0" + hour;
  return hour;
}

function timeConverterMin(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var min = a.getMinutes();
  if(min<10) min = "0" + min;
  return min;
}


function update2(weather2){
  soonTemp.innerHTML = weather.soonTemp + "°C";
  weatherDateDay.innerHTML = weather.weatherDateDay;
  weatherDateMonth.innerHTML = weather.weatherDateMonth;
  weatherDateHour.innerHTML = weather.weatherDateHour;
  weatherDateMin.innerHTML = weather.weatherDateMin;
  // switch(weather.soonDesc){
  //   case "thunderstorm with light rain": weather.soonDesc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc="mżawka"; break;
  //   case "light rain": weather.soonDesc="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc="ulewa"; break;
  //   case "extreme rain": weather.soonDesc="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc="śnieg"; break;
  //   case "heavy snow": weather.soonDesc="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc="śnieżyca"; break;
  //   case "mist": weather.soonDesc="mgła"; break;
  //   case "smoke": weather.soonDesc="mgła"; break;
  //   case "haze": weather.soonDesc="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc="mgła"; break;
  //   case "sand": weather.soonDesc="piasek"; break;
  //   case "dust": weather.soonDesc="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc="wichura"; break;
  //   case "clear sky": weather.soonDesc="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc="huragan"; break;
  //   case "cold": weather.soonDesc="zimno"; break;
  //   case "hot": weather.soonDesc="gorąco"; break;
  //   case "windy": weather.soonDesc="wietrznie"; break;
  //   case "hail": weather.soonDesc="grad"; break;
  //   case "calm": weather.soonDesc="cisza"; break;
  //   case "light breeze": weather.soonDesc="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc="silne wiatry"; break;
  //   case "gale": weather.soonDesc="wichura"; break;
  //   case "severe gale": weather.soonDesc="silna wichura"; break;
  //   case "storm": weather.soonDesc="sztorm"; break;
  //   case "violent storm": weather.soonDesc="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc="huragan"; break;
  // }
  soonDesc.innerHTML = weather.soonDesc;

  soonTemp.innerHTML = weather.soonTemp + "°C";
  weatherDateDay.innerHTML = weather.weatherDateDay;
  weatherDateMonth.innerHTML = weather.weatherDateMonth;
  weatherDateHour.innerHTML = weather.weatherDateHour;
  weatherDateMin.innerHTML = weather.weatherDateMin;
  // switch(weather.soonDesc){
  //   case "thunderstorm with light rain": weather.soonDesc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc="mżawka"; break;
  //   case "light rain": weather.soonDesc="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc="ulewa"; break;
  //   case "extreme rain": weather.soonDesc="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc="śnieg"; break;
  //   case "heavy snow": weather.soonDesc="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc="śnieżyca"; break;
  //   case "mist": weather.soonDesc="mgła"; break;
  //   case "smoke": weather.soonDesc="mgła"; break;
  //   case "haze": weather.soonDesc="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc="mgła"; break;
  //   case "sand": weather.soonDesc="piasek"; break;
  //   case "dust": weather.soonDesc="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc="wichura"; break;
  //   case "clear sky": weather.soonDesc="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc="huragan"; break;
  //   case "cold": weather.soonDesc="zimno"; break;
  //   case "hot": weather.soonDesc="gorąco"; break;
  //   case "windy": weather.soonDesc="wietrznie"; break;
  //   case "hail": weather.soonDesc="grad"; break;
  //   case "calm": weather.soonDesc="cisza"; break;
  //   case "light breeze": weather.soonDesc="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc="silne wiatry"; break;
  //   case "gale": weather.soonDesc="wichura"; break;
  //   case "severe gale": weather.soonDesc="silna wichura"; break;
  //   case "storm": weather.soonDesc="sztorm"; break;
  //   case "violent storm": weather.soonDesc="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc="huragan"; break;
  // }
  soonDesc.innerHTML = weather.soonDesc;

  soonTemp2.innerHTML = weather.soonTemp2 + "°C";
  weatherDateDay2.innerHTML = weather.weatherDateDay2;
  weatherDateMonth2.innerHTML = weather.weatherDateMonth2;
  weatherDateHour2.innerHTML = weather.weatherDateHour2;
  weatherDateMin2.innerHTML = weather.weatherDateMin2;
  // switch(weather.soonDesc2){
  //   case "thunderstorm with light rain": weather.soonDesc2="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc2="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc2="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc2="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc2="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc2="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc2="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc2="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc2="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc2="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc2="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc2="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc2="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc2="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc2="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc2="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc2="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc2="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc2="mżawka"; break;
  //   case "light rain": weather.soonDesc2="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc2="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc2="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc2="ulewa"; break;
  //   case "extreme rain": weather.soonDesc2="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc2="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc2="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc2="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc2="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc2="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc2="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc2="śnieg"; break;
  //   case "heavy snow": weather.soonDesc2="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc2="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc2="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc2="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc2="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc2="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc2="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc2="śnieżyca"; break;
  //   case "mist": weather.soonDesc2="mgła"; break;
  //   case "smoke": weather.soonDesc2="mgła"; break;
  //   case "haze": weather.soonDesc2="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc2="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc2="mgła"; break;
  //   case "sand": weather.soonDesc2="piasek"; break;
  //   case "dust": weather.soonDesc2="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc2="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc2="wichura"; break;
  //   case "clear sky": weather.soonDesc2="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc2="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc2="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc2="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc2="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc2="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc2="huragan"; break;
  //   case "cold": weather.soonDesc2="zimno"; break;
  //   case "hot": weather.soonDesc2="gorąco"; break;
  //   case "windy": weather.soonDesc2="wietrznie"; break;
  //   case "hail": weather.soonDesc2="grad"; break;
  //   case "calm": weather.soonDesc2="cisza"; break;
  //   case "light breeze": weather.soonDesc2="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc2="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc2="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc2="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc2="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc2="silne wiatry"; break;
  //   case "gale": weather.soonDesc2="wichura"; break;
  //   case "severe gale": weather.soonDesc2="silna wichura"; break;
  //   case "storm": weather.soonDesc2="sztorm"; break;
  //   case "violent storm": weather.soonDesc2="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc2="huragan"; break;
  // }
  soonDesc2.innerHTML = weather.soonDesc2;

  soonTemp3.innerHTML = weather.soonTemp3 + "°C";
  weatherDateDay3.innerHTML = weather.weatherDateDay3;
  weatherDateMonth3.innerHTML = weather.weatherDateMonth3;
  weatherDateHour3.innerHTML = weather.weatherDateHour3;
  weatherDateMin3.innerHTML = weather.weatherDateMin3;
  // switch(weather.soonDesc3){
  //   case "thunderstorm with light rain": weather.soonDesc3="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc3="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc3="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc3="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc3="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc3="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc3="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc3="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc3="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc3="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc3="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc3="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc3="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc3="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc3="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc3="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc3="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc3="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc3="mżawka"; break;
  //   case "light rain": weather.soonDesc3="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc3="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc3="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc3="ulewa"; break;
  //   case "extreme rain": weather.soonDesc3="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc3="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc3="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc3="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc3="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc3="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc3="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc3="śnieg"; break;
  //   case "heavy snow": weather.soonDesc3="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc3="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc3="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc3="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc3="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc3="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc3="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc3="śnieżyca"; break;
  //   case "mist": weather.soonDesc3="mgła"; break;
  //   case "smoke": weather.soonDesc3="mgła"; break;
  //   case "haze": weather.soonDesc3="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc3="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc3="mgła"; break;
  //   case "sand": weather.soonDesc3="piasek"; break;
  //   case "dust": weather.soonDesc3="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc3="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc3="wichura"; break;
  //   case "clear sky": weather.soonDesc3="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc3="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc3="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc3="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc3="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc3="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc3="huragan"; break;
  //   case "cold": weather.soonDesc3="zimno"; break;
  //   case "hot": weather.soonDesc3="gorąco"; break;
  //   case "windy": weather.soonDesc3="wietrznie"; break;
  //   case "hail": weather.soonDesc3="grad"; break;
  //   case "calm": weather.soonDesc3="cisza"; break;
  //   case "light breeze": weather.soonDesc3="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc3="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc3="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc3="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc3="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc3="silne wiatry"; break;
  //   case "gale": weather.soonDesc3="wichura"; break;
  //   case "severe gale": weather.soonDesc3="silna wichura"; break;
  //   case "storm": weather.soonDesc3="sztorm"; break;
  //   case "violent storm": weather.soonDesc3="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc3="huragan"; break;
  // }
  soonDesc3.innerHTML = weather.soonDesc3;

  soonTemp4.innerHTML = weather.soonTemp4 + "°C";
  weatherDateDay4.innerHTML = weather.weatherDateDay4;
  weatherDateMonth4.innerHTML = weather.weatherDateMonth4;
  weatherDateHour4.innerHTML = weather.weatherDateHour4;
  weatherDateMin4.innerHTML = weather.weatherDateMin4;
  // switch(weather.soonDesc4){
  //   case "thunderstorm with light rain": weather.soonDesc4="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc4="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc4="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc4="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc4="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc4="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc4="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc4="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc4="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc4="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc4="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc4="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc4="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc4="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc4="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc4="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc4="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc4="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc4="mżawka"; break;
  //   case "light rain": weather.soonDesc4="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc4="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc4="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc4="ulewa"; break;
  //   case "extreme rain": weather.soonDesc4="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc4="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc4="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc4="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc4="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc4="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc4="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc4="śnieg"; break;
  //   case "heavy snow": weather.soonDesc4="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc4="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc4="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc4="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc4="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc4="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc4="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc4="śnieżyca"; break;
  //   case "mist": weather.soonDesc4="mgła"; break;
  //   case "smoke": weather.soonDesc4="mgła"; break;
  //   case "haze": weather.soonDesc4="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc4="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc4="mgła"; break;
  //   case "sand": weather.soonDesc4="piasek"; break;
  //   case "dust": weather.soonDesc4="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc4="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc4="wichura"; break;
  //   case "clear sky": weather.soonDesc4="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc4="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc4="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc4="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc4="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc4="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc4="huragan"; break;
  //   case "cold": weather.soonDesc4="zimno"; break;
  //   case "hot": weather.soonDesc4="gorąco"; break;
  //   case "windy": weather.soonDesc4="wietrznie"; break;
  //   case "hail": weather.soonDesc4="grad"; break;
  //   case "calm": weather.soonDesc4="cisza"; break;
  //   case "light breeze": weather.soonDesc4="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc4="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc4="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc4="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc4="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc4="silne wiatry"; break;
  //   case "gale": weather.soonDesc4="wichura"; break;
  //   case "severe gale": weather.soonDesc4="silna wichura"; break;
  //   case "storm": weather.soonDesc4="sztorm"; break;
  //   case "violent storm": weather.soonDesc4="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc4="huragan"; break;
  // }
  soonDesc4.innerHTML = weather.soonDesc4;

  soonTemp5.innerHTML = weather.soonTemp5 + "°C";
  weatherDateDay5.innerHTML = weather.weatherDateDay5;
  weatherDateMonth5.innerHTML = weather.weatherDateMonth5;
  weatherDateHour5.innerHTML = weather.weatherDateHour5;
  weatherDateMin5.innerHTML = weather.weatherDateMin5;
  // switch(weather.soonDesc5){
  //   case "thunderstorm with light rain": weather.soonDesc5="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc5="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc5="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc5="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc5="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc5="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc5="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc5="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc5="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc5="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc5="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc5="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc5="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc5="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc5="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc5="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc5="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc5="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc5="mżawka"; break;
  //   case "light rain": weather.soonDesc5="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc5="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc5="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc5="ulewa"; break;
  //   case "extreme rain": weather.soonDesc5="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc5="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc5="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc5="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc5="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc5="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc5="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc5="śnieg"; break;
  //   case "heavy snow": weather.soonDesc5="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc5="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc5="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc5="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc5="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc5="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc5="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc5="śnieżyca"; break;
  //   case "mist": weather.soonDesc5="mgła"; break;
  //   case "smoke": weather.soonDesc5="mgła"; break;
  //   case "haze": weather.soonDesc5="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc5="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc5="mgła"; break;
  //   case "sand": weather.soonDesc5="piasek"; break;
  //   case "dust": weather.soonDesc5="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc5="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc5="wichura"; break;
  //   case "clear sky": weather.soonDesc5="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc5="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc5="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc5="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc5="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc5="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc5="huragan"; break;
  //   case "cold": weather.soonDesc5="zimno"; break;
  //   case "hot": weather.soonDesc5="gorąco"; break;
  //   case "windy": weather.soonDesc5="wietrznie"; break;
  //   case "hail": weather.soonDesc5="grad"; break;
  //   case "calm": weather.soonDesc5="cisza"; break;
  //   case "light breeze": weather.soonDesc5="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc5="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc5="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc5="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc5="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc5="silne wiatry"; break;
  //   case "gale": weather.soonDesc5="wichura"; break;
  //   case "severe gale": weather.soonDesc5="silna wichura"; break;
  //   case "storm": weather.soonDesc5="sztorm"; break;
  //   case "violent storm": weather.soonDesc5="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc5="huragan"; break;
  // }
  soonDesc5.innerHTML = weather.soonDesc5;

  soonTemp6.innerHTML = weather.soonTemp6 + "°C";
  weatherDateDay6.innerHTML = weather.weatherDateDay6;
  weatherDateMonth6.innerHTML = weather.weatherDateMonth6;
  weatherDateHour6.innerHTML = weather.weatherDateHour6;
  weatherDateMin6.innerHTML = weather.weatherDateMin6;
  // switch(weather.soonDesc6){
  //   case "thunderstorm with light rain": weather.soonDesc6="burza z lekkim deszczem"; break;
  //   case "thunderstorm with rain": weather.soonDesc6="burza z deszczem"; break;
  //   case "thunderstorm with heavy rain": weather.soonDesc6="burza z dużymi opadami"; break;
  //   case "light thunderstorm": weather.soonDesc6="lekka burza"; break;
  //   case "heavy thunderstorm": weather.soonDesc6="ciężka burza"; break;
  //   case "thunderstorm": weather.soonDesc6="burza"; break;
  //   case "ragged thunderstorm": weather.soonDesc6="burza deszczowa"; break;
  //   case "thunderstorm with light drizzle": weather.soonDesc6="burza z lekkim deszczem"; break;
  //   case "thunderstorm with drizzle": weather.soonDesc6="burza z deszczem"; break;
  //   case "thunderstorm with heavy drizzle": weather.soonDesc6="burza z dużymi opadami"; break;
  //   case "light intensity drizzle": weather.soonDesc6="lekka mżawka"; break;
  //   case "drizzle": weather.soonDesc6="mżawka"; break;
  //   case "heavy intensity drizzle": weather.soonDesc6="mocna mżawka"; break;
  //   case "light intensity drizzle rain": weather.soonDesc6="mocna mżawka"; break;
  //   case "drizzle rain": weather.soonDesc6="mżawka"; break;
  //   case "heavy intensity drizzle rain": weather.soonDesc6="mocna mżawka"; break;
  //   case "shower rain and drizzle": weather.soonDesc6="mżawka"; break;
  //   case "heavy shower rain and drizzle": weather.soonDesc6="mocna mżawka"; break;
  //   case "shower drizzle": weather.soonDesc6="mżawka"; break;
  //   case "light rain": weather.soonDesc6="lekki deszcz"; break;
  //   case "moderate rain": weather.soonDesc6="umiarkowany deszcz"; break;
  //   case "heavy intensity rain": weather.soonDesc6="silny deszcz"; break;
  //   case "very heavy rain": weather.soonDesc6="ulewa"; break;
  //   case "extreme rain": weather.soonDesc6="mocna ulewa"; break;
  //   case "freezing rain": weather.soonDesc6="marznący deszcz"; break;
  //   case "light intensity shower rain": weather.soonDesc6="lekki deszcz"; break;
  //   case "shower rain": weather.soonDesc6="lekki deszcz"; break;
  //   case "heavy intensity shower rain": weather.soonDesc6="lekki deszcz"; break;
  //   case "ragged shower rain": weather.soonDesc6="oberwanie chmury"; break;
  //   case "light snow": weather.soonDesc6="lekkie opady śniegu"; break;
  //   case "snow": weather.soonDesc6="śnieg"; break;
  //   case "heavy snow": weather.soonDesc6="duże opady śniegu"; break;
  //   case "sleet": weather.soonDesc6="śnieg z deszczem"; break;
  //   case "shower sleet": weather.soonDesc6="śnieg z deszczem"; break;
  //   case "light rain and snow": weather.soonDesc6="lekki deszcze ze śniegiem"; break;
  //   case "rain and snow": weather.soonDesc6="śnieg z deszczem"; break;
  //   case "light shower snow": weather.soonDesc6="lekki śnieg"; break;
  //   case "shower snow": weather.soonDesc6="śnieg"; break;
  //   case "heavy shower snow": weather.soonDesc6="śnieżyca"; break;
  //   case "mist": weather.soonDesc6="mgła"; break;
  //   case "smoke": weather.soonDesc6="mgła"; break;
  //   case "haze": weather.soonDesc6="mgła"; break;
  //   case "sand, dust whirls": weather.soonDesc6="wiry pyłowe"; break;
  //   case "fog": weather.soonDesc6="mgła"; break;
  //   case "sand": weather.soonDesc6="piasek"; break;
  //   case "dust": weather.soonDesc6="pylenie"; break;
  //   case "volcanic ash": weather.soonDesc6="pył wulkaniczny"; break;
  //   case "squalls": weather.soonDesc6="wichura"; break;
  //   case "clear sky": weather.soonDesc6="czyste niebo"; break;
  //   case "scattered clouds": weather.soonDesc6="rozproszone chmury"; break;
  //   case "few clouds": weather.soonDesc6="małe zachmurzenie"; break;
  //   case "overcast clouds": weather.soonDesc6="zachmurzenie całkowite"; break;
  //   case "broken clouds": weather.soonDesc6="rozproszone chmury"; break;
  //   case "tropical storm": weather.soonDesc6="burza tropikalna"; break;
  //   case "hurricane": weather.soonDesc6="huragan"; break;
  //   case "cold": weather.soonDesc6="zimno"; break;
  //   case "hot": weather.soonDesc6="gorąco"; break;
  //   case "windy": weather.soonDesc6="wietrznie"; break;
  //   case "hail": weather.soonDesc6="grad"; break;
  //   case "calm": weather.soonDesc6="cisza"; break;
  //   case "light breeze": weather.soonDesc6="lekka bryza"; break;
  //   case "gentle breeze": weather.soonDesc6="delikatna bryza"; break;
  //   case "moderate breeze": weather.soonDesc6="umiarkowana bryza"; break;
  //   case "fresh breeze": weather.soonDesc6="świeża bryza"; break;
  //   case "strong breeze": weather.soonDesc6="silny powiew"; break;
  //   case "high wind, near gale": weather.soonDesc6="silne wiatry"; break;
  //   case "gale": weather.soonDesc6="wichura"; break;
  //   case "severe gale": weather.soonDesc6="silna wichura"; break;
  //   case "storm": weather.soonDesc6="sztorm"; break;
  //   case "violent storm": weather.soonDesc6="gwałtowna burza"; break;
  //   case "hurricane": weather.soonDesc6="huragan"; break;
  // }
  soonDesc6.innerHTML = weather.soonDesc6;
}

function showPosition2(position){
  updateByGeo2(position.coords.latitude, position.coords.longitude);
}

soonTemp = document.getElementById("soon-temp");
weatherDateDay = document.getElementById("more-weather-day");
weatherDateMonth = document.getElementById("more-weather-month");
weatherDateHour = document.getElementById("more-weather-hour");
weatherDateMin = document.getElementById("more-weather-min");
soonDesc = document.getElementById("soon-desc");

soonTemp2 = document.getElementById("soon-temp2");
weatherDateDay2 = document.getElementById("more-weather-day2");
weatherDateMonth2 = document.getElementById("more-weather-month2");
weatherDateHour2 = document.getElementById("more-weather-hour2");
weatherDateMin2 = document.getElementById("more-weather-min2");
soonDesc2 = document.getElementById("soon-desc2");

soonTemp3 = document.getElementById("soon-temp3");
weatherDateDay3 = document.getElementById("more-weather-day3");
weatherDateMonth3 = document.getElementById("more-weather-month3");
weatherDateHour3 = document.getElementById("more-weather-hour3");
weatherDateMin3 = document.getElementById("more-weather-min3");
soonDesc3 = document.getElementById("soon-desc3");

soonTemp4 = document.getElementById("soon-temp4");
weatherDateDay4 = document.getElementById("more-weather-day4");
weatherDateMonth4 = document.getElementById("more-weather-month4");
weatherDateHour4 = document.getElementById("more-weather-hour4");
weatherDateMin4 = document.getElementById("more-weather-min4");
soonDesc4 = document.getElementById("soon-desc4");

soonTemp5 = document.getElementById("soon-temp5");
weatherDateDay5 = document.getElementById("more-weather-day5");
weatherDateMonth5 = document.getElementById("more-weather-month5");
weatherDateHour5 = document.getElementById("more-weather-hour5");
weatherDateMin5 = document.getElementById("more-weather-min5");
soonDesc5 = document.getElementById("soon-desc5");

soonTemp6 = document.getElementById("soon-temp6");
weatherDateDay6 = document.getElementById("more-weather-day6");
weatherDateMonth6 = document.getElementById("more-weather-month6");
weatherDateHour6 = document.getElementById("more-weather-hour6");
weatherDateMin6 = document.getElementById("more-weather-min6");
soonDesc6 = document.getElementById("soon-desc6");


function getByActualLoc2(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition2);
  }else{
    document.alert("You need to accept location sharing.");
  }
}

city = document.getElementById("manualWeather");

city.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        getByManualLoc2();
    }
});

function getByManualLoc2(){
  var city = document.getElementById("manualWeather").value;
  updateByManual2();
}
