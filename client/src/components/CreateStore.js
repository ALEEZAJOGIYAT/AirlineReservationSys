import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateStore = () => {
	const [store, setstore] = useState({
		name: "",
		desc: "",
		type: "",
		Date: "",
	});
	useEffect(() => {
		// setcheck(signAuth.state.data.user)
	}, []);
	const signAuth = useSelector((state) => state.addUser);
	const cnic = signAuth.state.data.user.CNIC;

	const handleChange = (event) => {
		console.log({ [event.target.name]: event.target.value });
		setstore({ ...store, [event.target.name]: event.target.value });
	};

	const navigate = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};
	return (
		<>
			<Box>
				<Paper
					sx={{
						textAlign: "center",
						boxShadow: 5,
						p: 4,
						margin: "30px auto",
						maxWidth: 450,
						// flexGrow: 2,
						// display: "flex",
						// backgroundColor: "#4a138c",
						// backgroundColor: (theme)
						//   theme.palette.mode === "dark" ? "red" : "#fff",
					}}
					elevation={3}
				>
					{/* import React from 'react'; */}

					<h3 style={{ color: "#4a138c", fontFamily: "Righteous" }}>
						Create Store
					</h3>
					<form encType="multipart/form-data">
						<FormControl fullWidth>
							<TextField
								required
								id="standard-password-input"
								label="store Name"
								type="text"
								autoComplete="current-email"
								variant="standard"
								margin="normal"
								value={store.name}
								name="name"
								onChange={handleChange}
							/>
							<TextField
								required
								id="standard-password-input"
								label="store type"
								type="text"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								value={store.type}
								name="type"
								onChange={handleChange}
							/>
							<TextField
								required
								id="standard-password-input"
								label="store Description"
								type="text"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								value={store.desc}
								name="desc"
								onChange={handleChange}
							/>

							<TextField
								required
								id="standard-password-input"
								type="date"
								autoComplete="current-text"
								variant="standard"
								margin="normal"
								value={store.Date}
								name="Date"
								onChange={handleChange}
							/>

							{/* <TextField
                required
                id="standard-password-input"
                accept="image/*"
                type="file"
                // value={Img}
                margin="normal"
                name="file"
                onChange={onFileChange}
                 onChange={(event) => {
                   setImg(event.target.files[0]);
                   console.log(event.target.files[0]);
                 }}
             / > */}
						</FormControl>

						{/* <Button variant="contained" component="span">
    Upload
  </Button> */}

						<br />
						<br />

						<Button
							variant="contained"
							// type="submit"
							onClick={handleSubmit}
							endIcon={<SendSharpIcon />}
						>
							Create
						</Button>
					</form>
				</Paper>
			</Box>
		</>
	);
};

export default CreateStore;
