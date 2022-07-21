const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const AddUsers = mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
	},
	CNIC: {
		type: Number,
		required: true,
		// min:13,
		// max:13
	},
	Role: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
	},
});

AddUsers.methods.getAuthToken = async function () {
	try {
		const token = jwt.sign({ id: this._id }, "screte");
		this.tokens = this.tokens.concat({ token: token });
		await this.save();
		return token;
	} catch (err) {
		console.log(err);
	}
};
const Users = mongoose.model("User", AddUsers);
// const Products=mongoose.model('User',AddProducts);
module.exports = Users;
