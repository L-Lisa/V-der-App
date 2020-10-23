class WeatherModel {
    // Today weather - From WEATHER API
    showWeather = (city) => {
        containerDayCast.innerHTML = "";
        containerIconCast.innerHTML = "";
        containerDescriptionCast.innerHTML = "";
        containerTempCast.innerHTML = "";

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=c3c53989f6119fa7482844c2c10c32ce`
        )
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                const unixTimestampSunrise = json.sys.sunrise;
                const unixTimestampSunset = json.sys.sunset;
                const sunrise = new Date(unixTimestampSunrise * 1000);
                const sunset = new Date(unixTimestampSunset * 1000);
                const sunriseTime = sunrise.toLocaleTimeString([], {
                    timeStyle: "short",
                });
                const sunsetTime = sunset.toLocaleTimeString([], {
                    timeStyle: "short",
                });
                console.log(json.name);
                container.innerHTML = `<p class="maintemp"> ${json.main.temp.toFixed(
                    1
                )}°C</p> <br>
<p class="cityname">${json.name}</p><p class="citytemp">${json.weather[0].description
                    }
<p class = "sunrise-set">Sunrise: ${sunriseTime} Sunset: ${sunsetTime}</p>`;
            })
    };

}

