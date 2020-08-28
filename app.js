require("dotenv").config();
const geocode = require("./utils/geocode");

const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=40.7831,-73.9712`;

/* request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log(response.body.error.info);
  } else {
    console.log(
      `${response.body.current.weather_descriptions[0]}\nIt is currenty ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees`
    );
  }
});

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (response.body.message) {
    console.log("Location not found");
  } else if (!response.body.features.length) {
    console.log("Location not found");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
}); */

geocode("Gdansk", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
