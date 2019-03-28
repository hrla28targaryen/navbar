const mongoose = require('mongoose');
const rentTheRunwayDbModel = require('./index.js');

const searchBarHelper = (target) => {
    return rentTheRunwayDbModel.find({itemName: /target/ });
}

module.exports = {
    searchBarHelper
}