import React from "react";
import "./Footer.css";

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

	const renderListItems = (array) =>
		array.map((item, index) => (
			<ul>
				<li key={index}>
					<a href={item.linkUrl}>{item.linkName}</a>
				</li>
			</ul>
		));

	return (
		<>
			<div className="border"></div>
			<div className="Footer">
				<h4>
					Questions? Call <u>1-844-505-2993</u>
				</h4>
				<div className="Footer__wrapper">
					<div>{renderListItems(links)}</div>
					<div>{renderListItems(Services)}</div>
					<div>{renderListItems(Account)}</div>
				</div>
				<div className="Footer__lang">
					<select onChange="changeLanguage">
						<option value="en">🌐︎ English</option>
						<option value="es">Spanish</option>
					</select>
				</div>
				<br />
				<br />
				<center className="build_by">
					<h2>Made By: Nardos Moges</h2>
				</center>
			</div>
		</>
	);
}

export default Footer;
