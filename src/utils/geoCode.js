const request = require('request')


const geoCode = (address, callback) => {
    const url = "http://api.positionstack.com/v1/forward?access_key=b9c680cd1c698f71b922059631d76e45&query=" + encodeURIComponent(address)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect with the weather service!", undefined)
        } else if (body.error) {
            callback("There is something wrong with the location!", undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label,
            })

        }
    })
}

module.exports = geoCode