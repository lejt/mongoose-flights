//define DB Schema here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    arrival: {
        type: Date,
        default: () => new Date(+new Date() + 365*24*60*60*1000),
        min: () => new Date(),
    },
}, {timestamps: true});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        trim: true,
        required: true,
    },
    departs: {
        type: Date,
        default: () => new Date(+new Date() + 365*24*60*60*1000),
        min: () => new Date(),
    },
    destinations: [destinationSchema],
}, {timestamps: true});


// create model named Flight (singular form of collection name) based on schema above
module.exports = mongoose.model('Flight', flightSchema);