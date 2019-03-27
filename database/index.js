const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/mgdbRentTheRunway');

const rentTheRunwaySchema = mongoose.Schema({
    itemID: {type: String, Unique: true},
    itemName: {type: String},
    designerName: {type: String},
    facebook: {type: String}
});

const rentTheRunwayDbModel = mongoose.model('rentTheRunwayDbModel', rentTheRunwaySchema);

module.exports = rentTheRunwayDbModel;