import React, { useState } from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
	const links = [
		{ linkUrl: "#", linkName: "FAQ" },
		{ linkUrl: "#", linkName: "Media Center" },
		{ linkUrl: "#", linkName: "Netflix Shop" },
		{ linkUrl: "#", linkName: "Ways to Watch" },
		{ linkUrl: "#", linkName: "Cookie Preferences" },
		{ linkUrl: "#", linkName: "Speed Test" },
		{
			linkUrl: "#",
			linkName: "Do Not Sell or Share My Personal Information",
		},
	];

	const Services = [
		{ linkUrl: "#", linkName: "Help Center" },
		{ linkUrl: "#", linkName: "Investor Relations" },
		{ linkUrl: "#", linkName: "Redeem Gift Cards" },
		{ linkUrl: "#", linkName: "Terms of Use" },
		{ linkUrl: "#", linkName: "Corporate Information" },
		{ linkUrl: "#", linkName: "Legal Notices" },
	];

	const Account = [
		{ linkUrl: "#", linkName: "Account" },
		{ linkUrl: "#", linkName: "Jobs" },
		{ linkUrl: "#", linkName: "Buy Gift Cards" },
		{ linkUrl: "#", linkName: "Privacy" },
		{ linkUrl: "#", linkName: "Contact Us" },
		{ linkUrl: "#", linkName: "Only on Netflix" },
	];
	const [selectedLanguage, setSelectedLanguage] = useState("en");

	const renderListItems = (array) =>
		array.map((item, index) => (
			<li key={index}>
				<a href={item.linkUrl}>{item.linkName}</a>
			</li>
		));

	const handleLanguageChange = (event) => {
		setSelectedLanguage(event.target.value);
	};

	return (
		<>
			<div className="border"></div>
			<Container className="Footer">
				<h4>
					Questions? Call <u>1-844-505-2993</u>
				</h4>
				<div className="Footer__wrapper ">
					<Row>
						<Col>{renderListItems(links)}</Col>
						<Col>{renderListItems(Services)}</Col>
						<Col>{renderListItems(Account)}</Col>
					</Row>
				</div>

				<div className="Footer__lang">
					<select onChange={handleLanguageChange} value={selectedLanguage}>
						<option value="en">🌐︎ English</option>
						<option value="es">Spanish</option>
					</select>
				</div>
				<br />
				<br />
				<center className="build_by">
					<h2>Build By: Nardos Moges</h2>
				</center>
			</Container>
		</>
	);
}

export default Footer;
