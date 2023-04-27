const request = require('request')

const forecast = (latitude, longitude, callback) => {
    url = "http://api.weatherstack.com/current?access_key=c783db9568a664e9b4ddfdafe56d890b&query=" + latitude + "," + longitude + "&units=m"
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect with the weather service!", undefined)
        } else if (body.error) {
            callback("There is something wrong with the location!", undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels likes " + body.current.feelslike + " degree out")
        }
    })
}

module.exports = forecast
