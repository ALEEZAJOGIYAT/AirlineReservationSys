const express = require("express");
const DbModel = require("../model/UserDb");
const ProductDB = require("../model/AirlineDb");
const UserFunction = require("../controller/controllerFunc");
const authenticate = require("../middleware/auth");
// const  expressValidator = require('express-validator');
const { body, validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
router.use(express.static(__dirname + "./server/"));

const storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, "/uploads");
	},
	filename: function (req, file, callback) {
		callback(null, file.fieldname);
	},
});

// const storage = multer.diskStorage({
//   destination: '.../client/public/uploads',
//   filename:function (req, file, cb) {
//     cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
//   },

// })

const upload = multer({ storage: storage }).single("file");
router.delete("/delete/:id", UserFunction.Delete);
router.post("/signup", UserFunction.SignUp);
router.get("/addtocart/:id", UserFunction.getProduct);
router.get("/mybasket/:id", UserFunction.getProduct);
router.get("/storeproduct/:id", UserFunction.select);

router.post("/login", UserFunction.Login);
router.post("/adddetails", upload, UserFunction.ProductADD);
// router.post('/addproduct',upload,UserFunction.products)
// router.post('/addproduct',upload,(req,res)=>{
//   var success=req.file.fieldname+"uploaded";
//   res.render('uploaded',{title:"uploaded",success:success})
// })
// router.get('/',(req,res)=>{
//     console.log(req)
// const id=req.body._id
// res.send(req.body)
// DbModel.findOne({},(err,result)=>{
//     if(err){
//         res.send(err)
//     }
//     res.send(result)
// }
// )
// router.get("/", (req,res)=>{
//     // res.send("data")
//     // console.log(req.body)
//     DbModel.find({},(err,result)=>{
//         if(err){
//             res.send(err)
//         }
//         res.send(result)
//     })
// });
// router.get('/login',async (req,res)=>{
//   console.log(req.session)
// })
router.get("/products", (req, res) => {
	// res.send("data")
	ProductDB.find({}, (err, result) => {
		if (err) {
			res.send(err);
		}
		res.send(result);
	});
});
// router.get('/dashboard',authenticate(["storeCreater"]),UserFunction.Login)

module.exports = router;
