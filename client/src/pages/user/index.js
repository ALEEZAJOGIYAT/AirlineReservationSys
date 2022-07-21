import React from "react";
import FooterPage from "../../common/footer";
import NavBar from "../../common/navbar/Unav";

import { Container } from "@mui/material";
import { Button } from "react-bootstrap";
import Lottie from "lottie-react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import home from "../../images/82445-travelers-walking-using-travelrmap-application.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const UserHome = () => {
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

			<FooterPage />
		</>
	);
};
