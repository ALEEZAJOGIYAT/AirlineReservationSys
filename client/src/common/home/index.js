import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Lottie from "lottie-react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import home from "../../images/homeearth.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footerpage from "../footer";
import NavBar from "../header";
import Dashboard from "../../pages/admin/dashboard";
import Outlet from "../../components/Outlet";
import axios from "axios";
import Products from "../../components/Products";

const Home = () => {
	const [check, setcheck] = useState("");
	// const call = () => {
	// 	axios.get("http://localhost:4000/login").then((res) => {
	// 		console.log("res", res);
	// 	});
	// };
	// const signAuth = useSelector((state) => state.addUser);

	// useEffect(() => {
	// 	console.log(signAuth);
	// 	console.log(signAuth?.data?.user?.Role);
	// }, [signAuth]);

	return (
		<>
			<NavBar />
			<Container maxWidth="lg">
				<Box sx={{ width: "100%", paddingBottom: "4em" }}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						<Grid item xs={6} mt={10}>
							<h1 className="heading">TRAVEL WITH US</h1>
							<h6>Travel with the most trusted airlines</h6>

							<Link to="/" variant="body2">
								<Button
									style={{
										backgroundColor: "#4a138c",
										width: 150,
										maxWidth: "100%",
										color: "#fffff",
									}}
									type="submit"
								>
									Get Started
								</Button>
							</Link>
						</Grid>
						<Grid item xs={6}>
							<Lottie animationData={home} />
						</Grid>
					</Grid>
				</Box>
			</Container>

			<br />
			<br />

			<Footerpage />
		</>
	);
};

export default Home;
