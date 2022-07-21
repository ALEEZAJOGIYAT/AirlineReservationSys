const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const AirlineDetails = mongoose.Schema({
	airlineName: {
		type: String,
		required: true,
	},
	airlineDesc: {
		type: String,
		required: true,
	},
	departureCountryName: {
		type: String,
		required: true,
	},

	destinationCountryName: {
		type: String,
		required: true,
	},
	arrivalTime: {
		type: String,
	},
	departureTime: {
		type: String,
	},

	img: {
		data: Buffer,
		type: String,
	},
	price: {
		type: String,
		required: true,
	},
	user: {
		type: String,
	},
});

const AirlineDB = mongoose.model("product", AirlineDetails);
module.exports = AirlineDB;
