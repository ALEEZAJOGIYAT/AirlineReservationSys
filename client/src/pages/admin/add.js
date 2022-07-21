import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

import { Modal } from "react-bootstrap";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { Divider, TextField, Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../common/navbar";
import FooterPage from "../../common/footer";
// import { storeData } from "../../redux/storeData/actions";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Stack } from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	//   width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export const AddAirline = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const type = [
		{
			value: "Clothes",
			label: "Clothes",
		},
		{
			value: "Dairy Products",
			label: "Dairy Products",
		},
		{
			value: "Shoes",
			label: "Shoes",
		},
		{
			value: "Electronics",
			label: "Electronics",
		},
		{
			value: "Accessories",
			label: "Accessories",
		},
		{
			value: "Tools",
			label: "Tools",
		},
	];
	const [airlineData, setAirlineData] = useState({
		name: "",
		desc: "",
		depCountryName: "",
		destCountryName: "",
		arrivalTime: "",
		departureTime: "",
		price: "",
	});

	//for image
	const [Img, setImg] = useState();
	const [file, setFile] = useState(null);

	const onFileChange = (e) => {
		setFile(e?.target?.files[0]);
		console.log(file, "FILE");
	};

	const handleImgChange = (event) => {
		setImg(event?.target?.file);
		console.log(Img);
	};
	const obj = {
		file: file,
		upload_preset: "fdp4mw2g",
	};

	//to post file in api u need to use formdata as required in documentations

	const handleChange = (e) => {
		setAirlineData({ ...airlineData, [e.target.name]: e.target.value });
	};

	const addData = (e) => {
		e.preventDefault();

		alert("Details added  Successfully");
		// console.log(product.image);
		console.log(file, "LINE 54");
		let formData = new FormData();
		console.log(Img);
		formData.append("file", file);
		formData.append("upload_preset", "fdp4mw2g");
		console.log(formData);

		axios
			.post("https://api.cloudinary.com/v1_1/dl2xnil88/image/upload", formData)
			.then((res) => {
				console.log(res);
				const ch = axios.post("http://localhost:4000/adddetails", {
					name: airlineData.name,
					desc: airlineData.desc,
					depCountryName: airlineData.depCountryName,
					destCountryName: airlineData.destCountryName,
					arrivalTime: airlineData.arrivalTime,
					departureTime: airlineData.departureTime,
					price: airlineData.price,
					img: res.data.url,
					cnic: "123456789123",
				});
			})
			.catch((err) => {
				console.log(err);
			});

		setAirlineData({
			name: "",
			storeType: "",
			depCountryName: "",
			destCountryName: "",
			arrivalTime: "",
			departureTime: "",
			price: "",
		});
		console.log(airlineData, "store data--->");

		history.push("/dashboard");
	};

	return (
		<>
			<NavBar />
			<Container>
				<Modal.Header>
					<Modal.Title>AIRLINE DETAILS</Modal.Title>
				</Modal.Header>
				<Divider />
				<Modal.Body>
					<form>
						<FormControl fullWidth>
							<div style={{ display: "flex", flexDirection: "row" }}>
								<br />
								<br />

								<TextField
									required
									id="outlined-required"
									label="Name of Airline"
									name="name"
									value={airlineData.name}
									onChange={handleChange}
								/>
								<TextField
									required
									id="outlined-required"
									label="About Airline"
									name="desc"
									value={airlineData.desc}
									onChange={handleChange}
									sx={{
										width: "45%",
										marginLeft: 5,
									}}
								/>
							</div>
							<br />
							<Divider />
							<br />
							<Typography
								variant="h5"
								component="h2"
								textAlign="center"
								sx={{ fontWeight: "bolder" }}
								//variant="h6"
								gutterBottom
							>
								Flight Details
							</Typography>
							<br />

							<Divider />
							<div>
								<br />
								<br />

								<TextField
									sx={{ width: "90%" }}
									required
									id="outlined-required"
									label="Departure Country Name"
									name="depCountryName"
									value={airlineData.depCountryName}
									onChange={handleChange}
								/>
								<br />
								<br />

								<TextField
									sx={{ width: "90%" }}
									required
									id="outlined-required"
									label="Destination Country Name"
									name="destCountryName"
									value={airlineData.destCountryName}
									onChange={handleChange}
								/>
								<br />
								<br />

								<TextField
									sx={{ width: "90%" }}
									required
									id="outlined-required"
									label="Arrival Time"
									name="arrivalTime"
									value={airlineData.arrivalTime}
									onChange={handleChange}
								/>
								<br />
								<br />

								<TextField
									sx={{ width: "90%" }}
									required
									id="outlined-required"
									label="Departure Time"
									name="departureTime"
									onChange={handleChange}
								/>

								<br />
								<br />

								<TextField
									sx={{ width: "90%" }}
									required
									id="outlined-required"
									type="number"
									label="Price"
									name="price"
									value={airlineData.price}
									onChange={handleChange}
								/>
								<br />
								<br />

								{/* <div>
									<input
										accept="image/*"
										type="file"
										id="select-image"
										style={{ display: "none" }}
										onChange={(e) => setSelectedImage(e.target.files[0])}
									/>
									<label htmlFor="select-image">
										<Button
											variant="contained"
											component="span"
											sx={{
												//marginLeft: 25,
												backgroundColor: "#4a138c",
												width: "300%",
												fontWeight: 800,
											}}
										>
											Upload Image
										</Button>
									</label>
									{imageUrl && selectedImage && (
										<Box mt={2} textAlign="center">
											<div>Image Preview:</div>
											<img
												src={imageUrl}
												alt={selectedImage.name}
												height="100px"
											/>
										</Box>
									)}
								</div> */}
								<label htmlFor="contained-button-file">
									<Input
										accept="image/*"
										id="contained-button-file"
										multiple
										type="file"
										onChange={onFileChange}
									/>
								</label>
							</div>
						</FormControl>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<Button
							variant="contained"
							size="medium"
							sx={{
								marginTop: 3,
								marginLeft: 30,
								width: "25%",
								backgroundColor: "rgb(28, 28, 29)",
							}}
							onClick={addData}
						>
							Add
						</Button>
					</div>
				</Modal.Footer>
			</Container>
			<FooterPage />
		</>
	);
};
