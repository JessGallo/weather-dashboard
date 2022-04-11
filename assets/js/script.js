//add a search to the search history section
var search = document.querySelector('.search');
var searchBar = document.getElementById('city');
var searchBtn = document.getElementById('searchBtn');
var searchHistoryList = document.getElementById('search-history');
var weatherDisplay = document.querySelector('.weatherDisplay');
var forecast1 = document.querySelector('.forecast1');
var forecast2 = document.querySelector('.forecast2');
var forecast3 = document.querySelector('.forecast3');
var forecast4 = document.querySelector('.forecast4');
var forecast5 = document.querySelector('.forecast5');

const m = moment();
var date = m.format("M/D/YYYY");
var forecast = document.createElement('div');
forecast.classList.add('col-2');

search.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchHistory = document.createElement('div');
    searchHistory.textContent = searchBar.value;
    searchHistory.classList.add('searchHistory');
    searchHistoryList.appendChild(searchHistory);

    const baseUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
    const endpoint = '&limit=1&appid=d68c8ccd94a05cf881bb3330ec9a4a19';
    const url = baseUrl + searchBar.value + endpoint;

    function apiCall() {
        fetch(url)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            var lat = data[0].lat;
            var lon = data[0].lon;

            const urlTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + "&units=imperial&appid=d68c8ccd94a05cf881bb3330ec9a4a19";

            function apiCallAgain() {
                fetch(urlTwo)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        var temp = data.current.temp;
                        var wind = data.current.wind_speed;
                        var humidity = data.current.humidity;
                        var uvIndex = data.current.uvi;
                        console.log(iconImage);

                        var cityName = document.createElement('h2');
                        cityName.textContent = searchBar.value + ' (' + date + ')';
                        cityName.classList.add('h2', 'font-weight-bold');
                        weatherDisplay.appendChild(cityName);
                        var icon = data.current.weather[0].icon;
                        var iconImage = document.createElement('img');
                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                        weatherDisplay.appendChild(iconImage);

                        var tempDisplay = document.createElement('div');
                        tempDisplay.textContent = 'Temp: ' + temp + ' °F';
                        tempDisplay.classList.add('weatherData');
                        weatherDisplay.appendChild(tempDisplay);

                        var windDisplay = document.createElement('div');
                        windDisplay.textContent = 'Wind: ' + wind + ' MPH';
                        windDisplay.classList.add('weatherData');
                        weatherDisplay.appendChild(windDisplay);

                        var humidityDisplay = document.createElement('div');
                        humidityDisplay.textContent = 'Humidity: ' + humidity + ' %';
                        humidityDisplay.classList.add('weatherData');
                        weatherDisplay.appendChild(humidityDisplay);

                        var uviDisplay = document.createElement('div');
                        uviDisplay.textContent = 'UV Index: ' + uvIndex;
                        uviDisplay.classList.add('weatherData');
                        weatherDisplay.appendChild(uviDisplay);
                        
                        function apiCallForecast() {
                            fetch(urlTwo)
                                .then(function (response) {
                                    return response.json();
                                })
                                .then(function (data) {
                                        //day 1
                                        console.log(data);
                                        var tempForecast = data.daily[0].temp.day;
                                        var windForecast = data.daily[0].wind_speed;
                                        var humidityForecast = data.daily[0].humidity;

                                        const tomorrow1 = moment().add(1, 'days').format("M/D/YYYY");
                                        var dateOne = document.createElement('div');
                                        dateOne.textContent = tomorrow1;
                                        dateOne.classList.add('h3','font-weight-bold', 'weatherData');
                                        forecast1.appendChild(dateOne);

                                        var icon = data.daily[0].weather[0].icon;
                                        var iconImage = document.createElement('img');
                                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                                        forecast1.appendChild(iconImage);

                                        var tempDis = document.createElement('div');
                                        tempDis.textContent = 'Temp: ' + tempForecast + ' °F';
                                        tempDis.classList.add('dayOne', 'weatherData');
                                        forecast1.appendChild(tempDis);

                                        var windDis = document.createElement('div');
                                        windDis.textContent = 'Wind: ' + windForecast + ' MPH';
                                        windDis.classList.add('dayOne', 'weatherData');
                                        forecast1.appendChild(windDis);  

                                        var humidityDis = document.createElement('div');
                                        humidityDis.textContent = 'Humidity: ' + humidityForecast + ' %';
                                        humidityDis.classList.add('dayOne', 'weatherData');
                                        forecast1.appendChild(humidityDis);

                                        //day 2
                                        var tempForecast = data.daily[1].temp.day;
                                        var windForecast = data.daily[1].wind_speed;
                                        var humidityForecast = data.daily[1].humidity;

                                        const tomorrow2 = moment().add(2, 'days').format("M/D/YYYY");
                                        var dateOne = document.createElement('div');
                                        dateOne.textContent = tomorrow2;
                                        dateOne.classList.add('h3','font-weight-bold', 'weatherData');
                                        forecast2.appendChild(dateOne);

                                        var icon = data.daily[1].weather[0].icon;
                                        var iconImage = document.createElement('img');
                                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                                        forecast2.appendChild(iconImage);

                                        var tempDis = document.createElement('div');
                                        tempDis.textContent = 'Temp: ' + tempForecast + ' °F';
                                        tempDis.classList.add('dayOne', 'weatherData');
                                        forecast2.appendChild(tempDis);

                                        var windDis = document.createElement('div');
                                        windDis.textContent = 'Wind: ' + windForecast + ' MPH';
                                        windDis.classList.add('dayOne', 'weatherData');
                                        forecast2.appendChild(windDis);  

                                        var humidityDis = document.createElement('div');
                                        humidityDis.textContent = 'Humidity: ' + humidityForecast + ' %';
                                        humidityDis.classList.add('dayOne', 'weatherData');
                                        forecast2.appendChild(humidityDis);

                                        //day 3
                                        var tempForecast = data.daily[2].temp.day;
                                        var windForecast = data.daily[2].wind_speed;
                                        var humidityForecast = data.daily[2].humidity;

                                        const tomorrow3 = moment().add(3, 'days').format("M/D/YYYY");
                                        var dateOne = document.createElement('div');
                                        dateOne.textContent = tomorrow3;
                                        dateOne.classList.add('h3','font-weight-bold', 'weatherData');
                                        forecast3.appendChild(dateOne);

                                        var icon = data.daily[2].weather[0].icon;
                                        var iconImage = document.createElement('img');
                                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                                        forecast3.appendChild(iconImage);

                                        var tempDis = document.createElement('div');
                                        tempDis.textContent = 'Temp: ' + tempForecast + ' °F';
                                        tempDis.classList.add('dayOne', 'weatherData');
                                        forecast3.appendChild(tempDis);

                                        var windDis = document.createElement('div');
                                        windDis.textContent = 'Wind: ' + windForecast + ' MPH';
                                        windDis.classList.add('dayOne', 'weatherData');
                                        forecast3.appendChild(windDis);  

                                        var humidityDis = document.createElement('div');
                                        humidityDis.textContent = 'Humidity: ' + humidityForecast + ' %';
                                        humidityDis.classList.add('dayOne', 'weatherData');
                                        forecast3.appendChild(humidityDis);

                                        //day 4
                                        var tempForecast = data.daily[3].temp.day;
                                        var windForecast = data.daily[3].wind_speed;
                                        var humidityForecast = data.daily[3].humidity;

                                        const tomorrow4 = moment().add(4, 'days').format("M/D/YYYY");
                                        var dateOne = document.createElement('div');
                                        dateOne.textContent = tomorrow4;
                                        dateOne.classList.add('h3','font-weight-bold', 'weatherData');
                                        forecast4.appendChild(dateOne);

                                        var icon = data.daily[3].weather[0].icon;
                                        var iconImage = document.createElement('img');
                                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                                        forecast4.appendChild(iconImage);

                                        var tempDis = document.createElement('div');
                                        tempDis.textContent = 'Temp: ' + tempForecast + ' °F';
                                        tempDis.classList.add('dayOne', 'weatherData');
                                        forecast4.appendChild(tempDis);

                                        var windDis = document.createElement('div');
                                        windDis.textContent = 'Wind: ' + windForecast + ' MPH';
                                        windDis.classList.add('dayOne', 'weatherData');
                                        forecast4.appendChild(windDis);  

                                        var humidityDis = document.createElement('div');
                                        humidityDis.textContent = 'Humidity: ' + humidityForecast + ' %';
                                        humidityDis.classList.add('dayOne', 'weatherData');
                                        forecast4.appendChild(humidityDis);

                                        //day 5
                                        var tempForecast = data.daily[4].temp.day;
                                        var windForecast = data.daily[4].wind_speed;
                                        var humidityForecast = data.daily[4].humidity;

                                        const tomorrow5 = moment().add(5, 'days').format("M/D/YYYY");
                                        var dateOne = document.createElement('div');
                                        dateOne.textContent = tomorrow5;
                                        dateOne.classList.add('h3','font-weight-bold', 'weatherData');
                                        forecast5.appendChild(dateOne);

                                        var icon = data.daily[4].weather[0].icon;
                                        var iconImage = document.createElement('img');
                                        iconImage.src = 'https://openweathermap.org/img/w/' + icon + '.png';
                                        forecast5.appendChild(iconImage);

                                        var tempDis = document.createElement('div');
                                        tempDis.textContent = 'Temp: ' + tempForecast + ' °F';
                                        tempDis.classList.add('dayOne', 'weatherData');
                                        forecast5.appendChild(tempDis);

                                        var windDis = document.createElement('div');
                                        windDis.textContent = 'Wind: ' + windForecast + ' MPH';
                                        windDis.classList.add('dayOne', 'weatherData');
                                        forecast5.appendChild(windDis);  

                                        var humidityDis = document.createElement('div');
                                        humidityDis.textContent = 'Humidity: ' + humidityForecast + ' %';
                                        humidityDis.classList.add('dayOne', 'weatherData');
                                        forecast5.appendChild(humidityDis);

                                })
                        }
                        apiCallForecast();
                    })
            }
            apiCallAgain();
          });
      };

      apiCall();
      
});