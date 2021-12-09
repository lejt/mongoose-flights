//define DB Schema here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
        required: true,
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: new Date(+new Date() + 365*24*60*60*1000),
        min: () => new Date(),
    },
});
  
module.exports = mongoose.model('Flight', flightSchema);