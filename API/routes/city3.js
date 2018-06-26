var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CitySchema   = new Schema({
    name: String,
    county: String,
    state: String,
    population: String,
    distance: String,
    time: String
       //distance from Lakewood according to google maps
});

module.exports = mongoose.model('City3', CitySchema);