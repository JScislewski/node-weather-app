require("dotenv").config();
const yargs = require("yargs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

yargs.version("1.0");

yargs.command({
  command: "forecast",
  describe: "Get forecast",
  builder: {
    location: {
      describe: "Location name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    geocode(argv.location, (error, data) => {
      if (error) {
        return console.log(error);
      }
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
          return error;
        }
        console.log(data.location);
        console.log(forecastData);
      });
    });
  },
});

yargs.parse();
