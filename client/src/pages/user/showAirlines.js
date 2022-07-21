import React from "react";
import { Button, Card, Typography, Container } from "@mui/material";
import NavBar from "../../common/navbar/Unav";

import animationData from "../../images/82445-travelers-walking-using-travelrmap-application.json";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FooterPage from "../../common/footer";
import qatar from "../../images/qatar.webp";
import airblue from "../../images/Airblue.jpg";
import flyemirate from "../../images/flight-emirates-feature.webp";
import { useHistory } from "react-router-dom";

export const AirlinesData = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const history = useHistory();

	return (
		<>
			<NavBar />
			<main>
				<Container sx={{ py: 8 }} maxWidth="md">
					<Typography
						component="h1"
						variant="h2"
						align="center"
						color="text.primary"
						gutterBottom
					>
						All Airlines
					</Typography>
					<br />
					<br />
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<Card sx={{ maxWidth: 345, marginRight: "10px" }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image={qatar}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									QATAR
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Let's go places together Discover the latest offers and news
									and start planning your next trip with us. FIFA World Cup
									Qatar 2022™ Get up to 12% savings on your Qatar Airways flight
									PLUS a chance to receive a complimentary FIFA World Cup Qatar
									2022™ package*
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									onClick={() =>
										window.open(
											"https://www.qatarairways.com/en-pk/homepage.html?CID=SXPK23456846M&account=Google-SEA_SASC-PK-EN-Brand&campaign=PK-Brand-Rest-EN_exact&adgroup=Airline&term=qatar+airline&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2Hgf27k4Qm6cOZaQcJHw_v_ugv3xchnqKcowoc6aq_n3iF70cZcYa4aAtzeEALw_wcB&gclsrc=aw.ds"
										)
									}
								>
									Book Flights
								</Button>
							</CardActions>
						</Card>
						<Card sx={{ maxWidth: 345, marginRight: "10px" }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image={airblue}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									AirBlue
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Airblue is a Pakistani airline established in 2003 that
									operates 30 daily flights, linking travelers in domestic
									cities like Islamabad, Lahore, Karachi and Sialkot with
									international destinations, including Dubai, Abu Dhabi,
									Sharjah, Muscat, Jeddah and Riyadh. Not many airlines can say
									they were inaugurated by the Prime Minister!
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									onClick={() =>
										window.open(
											"https://flightsearchdirect.com/?utm_source=adwords&gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2EeAiOq2B-m9LjGxNTFDXQAh7otD1PzC9Rqgg4rZH8PQDFj3Ao0AHwaAtyUEALw_wcB"
										)
									}
								>
									Show Details
								</Button>
							</CardActions>
						</Card>
						<Card sx={{ maxWidth: 345, marginRIght: "20px" }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image={flyemirate}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Fly Emirates
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Search for Emirates flights and book online. See our routes
									and schedules, and discover more about the experience you can
									look forward to on board
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size="small"
									onClick={() =>
										"https://www.emirates.com/PK/english/book/?gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2GNZIrXhnefIlRM3PJjZfRuDcHb4ATVhfmfY1oYitW8VfPGUKvlQsMaAs0EEALw_wcB&gclsrc=aw.ds"
									}
								>
									Show Details
								</Button>
							</CardActions>
						</Card>
					</div>
				</Container>
			</main>
			<FooterPage />
		</>
	);
};
