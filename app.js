require("dotenv").config();
const request = require("request");
const url = `http://api.weatherstack.com/current?access_key=${process.env.API}&query=Gdansk`;
request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
