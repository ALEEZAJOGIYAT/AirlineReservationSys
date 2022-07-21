import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../images/aeroplane.json";
import { Button } from "@mui/material";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const history = useHistory();

	const addAirline = () => {
		history.push("./add");
	};

	const role = "User";
	const admin = [
		{
			to: "./dashboard",
			name: "Dashboard",
		},
		{
			to: "./profile",
			name: "Profile",
		},
	];
	const User = [
		{
			to: "./airlines",
			name: "Airlines",
		},
		{
			to: "./userprofile",
			name: "Profile",
		},
	];
	const handleLogout = () => {
		history.push("./");
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
			<Navbar style={{ backgroundColor: "#4a138c" }} expand="lg">
				<Container fluid style={{ margin: "0 25px" }}>
					<Nav.Link
						as={Link}
						to="/"
						style={{ display: "flex", flexDirection: "row" }}
					>
						<Lottie options={defaultOptions} width={50} height={50} />
						<Navbar.Brand className="topnavbar" style={{ color: "#ffff" }}>
							UrAaN
						</Navbar.Brand>
					</Nav.Link>
					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							{role === "User"
								? User.map((value) => (
										<Nav.Link
											as={Link}
											to={value.to}
											style={{
												color: "#ffff",
												textDecoration: "none",
												margin: "0 12px ",
											}}
										>
											{value.name}
										</Nav.Link>
								  ))
								: null}
						</Nav>
						{role === "User" ? (
							<div>
								<Button
									variant="contained"
									onClick={handleLogout}
									sx={{
										marginLeft: "600px",
									}}
								>
									<AccountCircleOutlinedIcon style={{ fontSize: "20px" }} />
									Logout
								</Button>
							</div>
						) : null}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
