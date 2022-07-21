import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterPage = () => {
	return (
		<div
			color="blue"
			className="font-small pt-4 mt-4 "
			style={{ color: "#ffff", backgroundColor: "#4a138c" }}
		>
			<Container fluid className="text-center text-md-left">
				<Row>
					<Col md="6">
						<h5 className="title">UrAaN</h5>
						<FacebookOutlinedIcon style={{ fontSize: "40px" }} />
						<YouTubeIcon style={{ fontSize: "40px", marginLeft: "5px" }} />
						<TwitterIcon style={{ fontSize: "40px", marginLeft: "5px" }} />
					</Col>
					<Col md="6">
						<h5 className="title">Links</h5>
						<ul>
							<li className="list-unstyled">+921 3670001</li>
							<li className="list-unstyled">uraan@gmail.com</li>
							<li className="list-unstyled">www.uraan.com</li>
						</ul>
					</Col>
				</Row>
			</Container>
			<div className="footer-copyright text-center py-3">
				<Container fluid>
					&copy; {new Date().getFullYear()} Copyright: Uraan
				</Container>
			</div>
		</div>
	);
};

export default FooterPage;
