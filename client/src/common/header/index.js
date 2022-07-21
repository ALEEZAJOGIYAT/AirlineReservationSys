import React, { useEffect, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./style.css";
import Lottie from "react-lottie";
import animationData from "../../images/aeroplane.json";
import { Button } from "@mui/material";

const NavBar = () => {
	const [open, setOpen] = useState(false);
	const history = useHistory();

	// const navigate = useHistory();
	const handleLogin = () => {
		// dispatch(deleteUser(signAuth?.state?.data?.user?._id));gnU
		history.push("./login");
	};

	const handleSignUp = () => {
		// dispatch(deleteUser(signAuth?.state?.data?.user?._id));
		history.push("./signup");
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
							<>
								<Button
									className="authSignBtn"
									style={{ color: "#ffff" }}
									onClick={handleSignUp}
								>
									<AccountCircleOutlinedIcon
										className="icons"
										style={{ fontSize: "20px" }}
									/>
									Signup
								</Button>
								<Button
									className="authLoginBtn"
									style={{ color: "#ffff" }}
									onClick={handleLogin}
								>
									<AccountCircleOutlinedIcon
										className="icons"
										style={{ fontSize: "20px" }}
									/>
									LogIn
								</Button>
							</>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
