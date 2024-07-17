import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.scss";
import logo from "./Logo.png"

function Footer() {
	return (
		<footer className="footer-container">
			<Container>
				<Row>
					<Col className="brand-container">
						<Image
							className="brand-logo"
							src={logo}
						/>
					</Col>
					<Col>
						<h6 className="brand-name">Bhavna Welfare Foundation</h6>
						<Row className="contact-row">
							<span className="contact">
								<span className="icon">
									<i className="bi bi-house-door-fill"></i>
								</span>
								<span className="label">
									Room no-1, 22 MIG, W block, Keshav Nagar, <br />
									Kanpur , UP - 208014
								</span>
							</span>
							<span className="contact">
								<span className="icon">
									<i className="bi bi-telephone-fill"></i>
								</span>
								<span className="label">
									+91-9651689753
									<br />
									bhavna.ngo@gmail.com
								</span>
							</span>
						</Row>
					</Col>
				</Row>
			</Container>
			<p className="copyright">Copyright © 2024 Bhavna. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
