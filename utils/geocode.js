const request = require("request");
const geocode = (address, callback) => {
  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.GEOCODE_API}&limit=1`;
  request({ url: geocodeURL, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.message || !body.features.length) {
      callback("Unable to find location.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocode;
