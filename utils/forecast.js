const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${
    process.env.WEATHER_API
  }&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}\nIt is currenty ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees`
      );
    }
  });
};
module.exports = forecast;
