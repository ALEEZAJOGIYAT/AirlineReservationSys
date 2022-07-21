import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
	Link,
	Button,
	Card,
	Typography,
	Toolbar,
	Container,
} from "@mui/material";
import "../../../App.css";
import NavBar from "../../../common/navbar";
import animationData from "../../../images/98481-e-commerce-shop-online.json";
import AppBar from "@mui/material/AppBar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Lottie from "react-lottie";
import FooterPage from "../../../common/footer";

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="./home">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const Dashboard = () => {
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
			<NavBar />
			<main>
				{/* Hero unit */}
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						All Flights
					</Typography>
					<br />
					<br />
					<br />
					{/* End hero unit */}
					<Grid container spacing={4}>
						{/* {proData?.map((card, index) => ( */}
						<Grid item xs={12} sm={6} md={4}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<CardMedia
									component="img"
									image="https://source.unsplash.com/random"
									alt="random"
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="h2">
										qatar
										{/* {card.productName} */}
									</Typography>
									<Typography>hhhhhh</Typography>
									<Typography>1200000</Typography>
								</CardContent>
								<CardActions>
									<Button
										size="small"
										variant="contained"
										//                      onClick={() => handleDelete(card._id)}
									>
										Add to Cart
									</Button>
								</CardActions>
							</Card>
						</Grid>
						{/* ))} */}
					</Grid>
				</Container>
			</main>
			{/* Footer */}
			<FooterPage />
			{/* End footer */}
		</>
	);
};

export default Dashboard;
