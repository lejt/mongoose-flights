//define DB Schema here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    },
    arrival: Date,
}, {timestamps: true});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
        trim: true,
        required: true,
    },
    airport: {
        type: String,
        enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
        trim: true,
        required: true,
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
        default: new Date(+new Date() + 365*24*60*60*1000),
        min: () => new Date(),
        trim: true,
    },
    destinations: [destinationSchema],
}, {timestamps: true});


// create model named Flight (singular form of collection name) based on schema above
module.exports = mongoose.model('Flight', flightSchema);