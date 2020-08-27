require("dotenv").config();
const request = require("request");

const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=Gdansk`;

request({ url: weatherURL, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]}\nIt is currenty ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees`
  );
});

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.GEOCODE_API}&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
