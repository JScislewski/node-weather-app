const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${
    process.env.WEATHER_API
  }&query=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}`;
  request({ url: weatherURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.Error) {
      callback(body.Error, undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}\nIt is currenty ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees`
      );
    }
  });
};
module.exports = forecast;
