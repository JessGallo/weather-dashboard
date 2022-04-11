//add a search to the search history section
var search = document.querySelector('.search');
var searchBar = document.getElementById('city');
var searchBtn = document.getElementById('searchBtn');
var searchHistoryList = document.getElementById('search-history');
var weatherDisplay = document.querySelector('.weatherDisplay');

search.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(searchBar.value);;

    var searchHistory = document.createElement('div');
    searchHistory.textContent = searchBar.value;
    searchHistory.classList.add('searchHistory');
    searchHistoryList.appendChild(searchHistory);

    var cityName = document.createElement('h2');
    cityName.textContent = searchBar.value;
    cityName.classList.add('h2', 'font-weight-bold');
    weatherDisplay.appendChild(cityName);


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
                        console.log(data);
                        var temp = data.current.temp;
                        var wind = data.current.wind_speed;
                        var humidity = data.current.humidity;
                        var uvIndex = data.current.uvi;

                        var tempDisplay = document.createElement('div');
                        tempDisplay.textContent = 'Temp: ' + temp + ' °F';
                        weatherDisplay.appendChild(tempDisplay);

                        var windDisplay = document.createElement('div');
                        windDisplay.textContent = 'Wind: ' + wind + ' MPH';
                        weatherDisplay.appendChild(windDisplay);

                        var humidityDisplay = document.createElement('div');
                        humidityDisplay.textContent = 'Humidity: ' + humidity + '%';
                        weatherDisplay.appendChild(humidityDisplay);

                        var uviDisplay = document.createElement('div');
                        uviDisplay.textContent = 'UV Index: ' + uvIndex;
                        weatherDisplay.appendChild(uviDisplay);

                    })
            }

            apiCallAgain();
          });
      };

      apiCall();
      
});