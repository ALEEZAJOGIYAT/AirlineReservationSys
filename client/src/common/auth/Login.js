import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "../../images/93385-login.json";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../redux/action/action";
import axios from "axios";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const auth = useSelector((state) => state.addUser);
	console.log(auth, "authhhhhhhhhhhhhhhh");

	const [values, setValues] = useState({
		cnic: "",
		email: "",
		password: "",
		showPassword: false,
	});
	const handleChange = (event) => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({
			cnic: "",
			email: "",
			password: "",
			showPassword: false,
		});
		if (
			axios
				.post("http://localhost:4000/login", {
					cnic: values.cnic,
					email: values.email,
					password: values.password,
				})
				.then((res) => {
					console.log("token response", res.data);
					dispatch(User(res?.data));
					{
						auth?.data?.user?.role === "Admin"
							? history.push("/user")
							: history.push("/admin");
					}
				})
				.catch((er) => {
					console.log("er response", er);
				})
		) {
			// const data=res.json()
			// console.log(data)
		}
	};

	useEffect(() => {
		console.log(auth?.state?.data?.user?.Role);
	}, [auth]);

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
				<Lottie options={defaultOptions} width={500} height={500} />
				<Paper
					sx={{
						textAlign: "center",
						boxShadow: 5,
						p: 4,
						margin: "auto",
						maxWidth: 450,
						flexGrow: 2,
						display: "flex",
					}}
					elevation={3}
				>
					<form>
						<h1 style={{ color: "#4a138c" }}>Log in to your Account</h1>

						<FormControl>
							<TextField
								required
								id="outlined-basic"
								label="CNIC"
								type="text"
								autoComplete="current-text"
								variant="outlined"
								margin="normal"
								name="cnic"
								value={values.cnic}
								onChange={handleChange}
							/>
							<br />
							<TextField
								required
								id="outlined-basic"
								label="Email"
								type="email"
								autoComplete="current-text"
								variant="outlined"
								margin="normal"
								name="email"
								value={values.email}
								onChange={handleChange}
							/>
							<br />
							<TextField
								required
								id="standard-password-input"
								label="Password"
								type="password"
								autoComplete="current-text"
								variant="outlined"
								margin="normal"
								name="password"
								value={values.password}
								onChange={handleChange}
							/>

							<br />
							<FormHelperText>
								We'll keep you signed in on this device. You may be asked to
								enter your password when modifying sensitive account
								information.
							</FormHelperText>
						</FormControl>
						<br />
						<br />
						<Button
							sx={{ backgroundColor: "#4a148c" }}
							variant="contained"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</Button>
						<Link to="/signup" variant="body2">
							<p style={{ fontSize: "0.8em" }}>
								Not have an account ? Sign up here <br />
							</p>
						</Link>
					</form>
				</Paper>
			</Container>
		</>
	);
};

export default Login;
