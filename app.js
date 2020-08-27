require("dotenv").config();
const request = require("request");
const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=Gdansk`;
request({ url, json: true }, (error, response) => {
  console.log(response.body.current);
});
