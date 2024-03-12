const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.post("/api/email", (req, res) => {
	let { emailTo, html, subject, text } = req.body;

	if (!emailTo) return res.status(400).send("Email is required");
	html = html || "";
	text = text || "Easy peasy lemon squeezy!";
	subject = subject || "Sent from Node.js";

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: emailTo,
		subject,
		text,
		html,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.error(error);
			res.status(500).send("Error: " + error);
		} else {
			const response = `Email sent: ${info.response}`;
			console.log(response);
			res.send(response);
		}
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}, http://localhost:${port}`);
});
