import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import animationData from "../../images/93385-login.json";
import Lottie from "react-lottie";
import { createTheme } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const deepPurpleTheme = createTheme({ palette: { primary: deepPurple } });

const Signup = () => {
	const [user, setUser] = useState({
		fname: "",
		cnic: "",
		email: "",
		password: "",
		cpassword: "",
		role: "",
		showPassword: false,
	});
	const handleinput = (e) => {
		console.log(e.target.value);
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const [values, setValues] = useState({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});
	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const history = useHistory();

	const Postdata = (e) => {
		e.preventDefault();
		axios.post("http://localhost:4000/signup", {
			name: user.fname,
			cnic: user.cnic,
			email: user.email,
			password: user.password,
			cpassword: user.cpassword,
			role: user.role,
		});
		alert("user added");

		setUser({
			fname: "",
			cnic: "",
			email: "",
			password: "",
			cpassword: "",
			role: "",
			showPassword: false,
		});
		history.push("./login");
	};
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<>
			<Container sx={{ mt: 2, display: "flex" }}>
				<Lottie
					options={defaultOptions}
					width={400}
					height={400}
					style={{ marginTop: "60px" }}
				/>

				<Paper
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						boxShadow: 4,
						p: 1.5,
						margin: "auto",
						maxWidth: 450,
						maxHeight: 600,
						flexGrow: 2,
					}}
					elevation={3}
				>
					<form style={{ fontSize: "0.6em" }}>
						<h1 style={{ color: "#12005e" }}>SIGN UP</h1>
						<FormControl>
							<FormLabel id="demo-row-radio-buttons-group-label">
								Role
							</FormLabel>
							<RadioGroup
								onChange={handleinput}
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="role"
							>
								<FormControlLabel
									value="User"
									control={<Radio />}
									label="User"
								/>
								<FormControlLabel
									value="Admin"
									control={<Radio />}
									label="Admin"
								/>
							</RadioGroup>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								required
								sx={{ color: "#fff" }}
								id="standard-password-input"
								label="Name"
								type="text"
								autoComplete="current-email"
								variant="standard"
								margin="normal"
								name="fname"
								value={user.fname}
								onChange={handleinput}
							/>
							<TextField
								required
								id="standard-password-input"
								label="CNIC"
								type="text"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								name="cnic"
								value={user.cnic}
								onChange={handleinput}
							/>
							<TextField
								required
								id="standard-password-input"
								label="Email"
								type="email"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								name="email"
								value={user.email}
								onChange={handleinput}
							/>
							<TextField
								required
								id="standard-adornment-password"
								type={user.showPassword ? "text" : "password"}
								label="Password"
								variant="standard"
								margin="normal"
								name="password"
								value={user.password}
								onChange={handleinput}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{user.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
							<TextField
								required
								fullWidth
								id="standard-adornment-password"
								type={user.showPassword ? "text" : "password"}
								label="Confirm password"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								name="cpassword"
								value={user.cpassword}
								onChange={handleinput}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{user.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>

						<p>
							We'll keep you signed in on this device. You may be asked <br />{" "}
							to enter your password when modifying sensitive account
							information.
						</p>
						<div
							style={{
								display: "flex",
								alignItem: "center",
								justifyContent: "center",
							}}
						>
							<Button
								sx={{ backgroundColor: "#4a148c" }}
								variant="contained"
								onClick={Postdata}
								endIcon={<SendSharpIcon />}
							>
								Submit
							</Button>
						</div>
					</form>
				</Paper>
			</Container>
		</>
	);
};

export default Signup;
