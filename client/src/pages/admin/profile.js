import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import NavBar from "../../common/navbar";

export const CompanyProfile = () => {
	const [close, setClose] = useState(false);

	const [desc,setDesc]=useState('')
	const handleChange=(e)=>{
		
	}

	const handleUpdate=()=>{
		
	}


	return (
		<>
			<NavBar />

			<div>
				{/* <Container
				maxWidth="sm"
				sx={{
					mb: 4,
				}}
			> */}
				<div tabindex="-1">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">STUDENT PROFILE</h5>
							</div>
							<div className="modal-body">
								<div className="container">
									<div className="form-group">
										<label className="labels form-label" for="title">
											Role:Admin
										</label>
									</div>

									<div className="form-group">
										<label className="labels form-label" for="title">
											Email Address
										</label>
										<input
											placeholder="Email Title here"
											name="title"
											type="text"
											id="title"
											className="form-control"
											style={{ width: "35%" }}
											value="admin12@gmail.com"
										/>
									</div>
									<div className="form-group">
										<label className="labels form-label" for="title">
											Description
										</label>
										<textarea
											rows="3"
											name="jobDescription"
											id="exampleForm.ControlTextarea1"
											className="form-control"
											style={{ width: "35%" }}
										/>
									</div>
								</div>
								{/* <p>{user.email}</p> */}
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-dark">
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* </Container> */}
			</div>
		</>
	);
};
