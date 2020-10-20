// display user's local weather when first loading the page
//      to be retrieved from the browser information
// cities searched by the user should remain in a list on the UI
//      user should be able to click items in the list to retrieve weather information for that city
// save cities to local storage

$(document).ready(function () {
    // console.log ("Hello world");








    // var apiKey = "";
    // 

});



$("#searchBtn").on("click", function (event) {
    event.preventDefault();

        getWeather();

        function getWeather(){
            var apiKey = "71796756540c1014d5edbadabf281573";
            var location = $("#location").val()
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" +apiKey
            console.log(queryURL)

            //ajax call
            $.ajax({
                url: queryURL,
                method: "GET",
                dataType: "json"
            }).then (function (response) {
                console.log(response);
                $("#cityName").empty();
                var cityName = response.city.name
                console.log(cityName);
                var cityTitle = $("<h4>");    
                    cityTitle.attr({
                        "class":"card-body",
                        "id":"cardBody"
                    });
                    (cityTitle).append(cityName);
                    $("#cardBody").append(cityTitle);
                    $("#cardBody").append("<p>Weather Information</p>");
                    


                var forecast = response.list

                for (var i=0; i < 5 ;i++){
                    var wxIcon = response.list[i].weather[0].icon;
                    // console.log(wxIcon);
                    var icon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + wxIcon + "@2x.png");
                    var tempF = Math.round((response.list[i].main.temp - 273.15) * 1.8 + 32) + "F";
                    // console.log(tempF);
                    var humidity = response.list[i].main.humidity + "%";
                    // console.log(humidity);
                    var wind = response.list[i].wind.speed + " mph";
                }



            })

        

        }
});
