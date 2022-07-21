import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "../App.css";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "../common/header";
import FooterPage from "../common/footer";

const Products = () => {
	const [productData, setProductData] = useState([]);
	const [loading, setloading] = useState(false);
	const [filter, setfilter] = useState(productData);

	useEffect(() => {
		axios.get("http://localhost:4000/products").then((response) => {
			setProductData(response.data);
			setfilter(response.data);
			// console.log(filter)
			// setloading(false);
			// console.log(response.data)
		});
		// console.log(productData)
	}, []);
	axios.get("https://res.cloudinary.com/demo/image/upload/");
	const Filterproduct = (selectedcategory) => {
		const updatelist = productData.filter(
			(x) => x.productcategory === selectedcategory
		);
		setfilter(updatelist);
	};

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontFamily: "Righteous",
							textAlign: "center",
							color: "#4a138c",
						}}
					>
						Products
					</Typography>
					<br />
					<br />
					<div className="d-flex align-item-center justify-content-center mb-5 pb-5">
						{/* <h3>Categories</h3><br/> */}
						<div
							className="btn  me-2"
							style={{ backgroundColor: "#4a138c", color: "#fff" }}
							onClick={() => {
								setfilter(productData);
							}}
						>
							All
						</div>
						<div
							className="btn  me-2"
							style={{ backgroundColor: "#4a138c", color: "#fff" }}
							onClick={() => Filterproduct("men's cloth")}
						>
							Men's Collection
						</div>
						<div
							className="btn  me-2"
							style={{ backgroundColor: "#4a138c", color: "#fff" }}
							onClick={() => Filterproduct("women's cloth")}
						>
							Women's Collection
						</div>
						<div
							className="btn  me-2"
							style={{ backgroundColor: "#4a138c", color: "#fff" }}
							onClick={() => Filterproduct("cosmetic")}
						>
							Jwelllery
						</div>
						<div
							className="btn  me-2"
							style={{ backgroundColor: "#4a138c", color: "#fff" }}
							onClick={() => Filterproduct("electronic")}
						>
							Electronics
						</div>
					</div>
					<br />
					<br />

					{/* <Container sx={{fontFamily:'Righteous' ,display:"grid"}}> */}
					{/* <div className="row justify-content-center "> */}
					{/* <div className="col-md-3 mb-2"> */}
					{filter.map((i, key) => {
						console.log(i);
						return (
							<>
								<div className="col-md-3 mb-2">
									<Card
										className="h-100 p-4 square border text-center"
										key={i._id}
									>
										<Card.Img
											className="card-img"
											variant="top"
											// src={proimage}
											src={i.productImg}
										/>
										<Card.Body className="card-body">
											<Card.Title className="fw-bolder">
												{i.productName}
											</Card.Title>
											<Card.Text>{i.productDesc.substring(0, 100)}</Card.Text>
											<Card.Title className="fw-bolder">
												{i.productPrice}
											</Card.Title>
											<NavLink to={`/addtocart/${i._id}`}>
												<Button
													style={{
														backgroundColor: "#4a138c",
														width: 150,
														maxWidth: "100%",
														color: "#fffff",
													}}
													type="submit"
												>
													Buy Now
												</Button>
											</NavLink>
										</Card.Body>
									</Card>
								</div>
							</>
						);
					})}

					{/* </div> */}
					{/* </Container> */}

					{/* </div> */}
					{/* <img src="http://res.cloudinary.com/dl2xnil88/image/upload/v1648789054/fuxti4jsetbxeqgymbep.jpg" alt="" srcset="" /> */}
				</Grid>
			</Grid>
			{/* <FooterPage /> */}
		</>
	);
};
export default Products;
