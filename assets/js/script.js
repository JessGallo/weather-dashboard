//add a search to the search history section
var search = document.querySelector('.search');
var searchBar = document.getElementById('city');
var searchBtn = document.getElementById('searchBtn');
var searchHistoryList = document.getElementById('search-history');

search.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(searchBar.value);;

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
                        console.log(data);
                    })
            }

            apiCallAgain();
          });
      };

      apiCall();
      
});