const express = require("express");
const mongoose = require("mongoose");
const DbModel = require("../model/UserDb");
const ProductDB = require("../model/AirlineDb");
const { route } = require("../routes/routers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

const ProductADD = async (req, res) => {
	const {
		name,
		desc,
		depCountryName,
		destCountryName,
		arrivalTime,
		departureTime,
		price,
		img,
		cnic,
	} = req.body;

	console.log(req?.body.image, "LINE 15 ==>");
	var success = image + "uploaded";
	res.send({ title: "uploaded", success: success });
	try {
		const ProductData = new ProductDB({
			airlineName: name,
			airlineDesc: desc,
			departureCountryName: depCountryName,
			destinationCountryName: destCountryName,
			arrivalTime: arrivalTime,
			departureTime: departureTime,
			img: img,
			price: price,
			user: cnic,
		});

		await ProductData.save();
		res.send("inserted");
		console.log("user added", ProductData);
	} catch (err) {
		console.log(err);
	}
};
// const products = async (req, res) => {
//   const { desc, name, price, date, category, image, cnic } = req.body;
// const image=req.body.file
// console.log(req?.body.image,"LINE 15 ==>")
// var success=image+"uploaded";
// res.send({title:"uploaded",success:success})
//   console.log(req.body);
//   try {
//     const userfind = await DbModel.find(
//       { CNIC: cnic },
//       async (err, result) => {
//           result.products.productName = name,
//           result.products.productDesc = desc,
//           result.products.productPrice = price,
//           result.products.productImg = image,
//           result.products.productcategory = category,
//           result.products.date = date
//         result.save()
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

const SignUp = async (req, res) => {
	const {
		name,
		cnic,
		email,
		password: plaintextpassword,
		cpassword,
		role,
	} = req.body;
	const password = await bcrypt.hash(req.body.password, 10);

	try {
		const userData = new DbModel({
			Name: name,
			Email: email,
			CNIC: cnic,
			Role: role,
			Password: password,
		});

		await userData.save();
		res.send("inserted");
		console.log("user added", userData);
	} catch (err) {
		console.log(err);
	}
};
const Login = async (req, res) => {
	const { email, password, cnic } = req.body;
	if (!email || !password || !cnic) {
		return res.json({ status: "notok", error: "plz enter " });
	}
	console.log(req.body);
	const userLogin = await DbModel.findOne({ CNIC: cnic });
	if (userLogin) {
		const isMatch = await bcrypt.compare(password, userLogin.Password);

		if (!isMatch) {
			return res.json({ status: "400", error: "invalid" });
		} else {
			res.send(userLogin);
			console.log(userLogin, "login response");
		}
	} else {
		return res.json({ error: "invalid crediential" });
	}
};

const Delete = () => async (req, res) => {
	// dataModel.deleteOne({$where :Id})
	const id = req.params.id;
	// res.send(id)
	// res.send(dataModel)
	// dataModel.find({$where {_id:"6238149e2f9e97ac64fc4ade"}})
	await dataModel.findByIdAndDelete(id);
	res.send("deleted");
};
const select = async (req, res) => {
	const id = req.params.id;
	const object = await ProductDB.findOne({ CNIC: id });
	if (!object) {
		res.status(500).json({ success: false });
	}
	res.send(object);
	console.log(object);
};
const getProduct = async (req, res) => {
	console.log(req.params.id);
	const id = req.params.id;
	const obj = await ProductDB.findOne({ _id: id });
	// ,(err,result)=>{
	// // console.log(result)
	// if(err){
	//     res.send(err)
	// }
	// res.send(result)
	// console.log(result)
	// }
	if (!obj) {
		res.status(500).json({ success: false });
	}
	res.send(obj);
};

module.exports = { SignUp, Login, ProductADD, getProduct, select, Delete };
