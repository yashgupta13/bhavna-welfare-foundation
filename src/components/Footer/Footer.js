import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.scss";
import logo from "./Logo.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-block container">
        <h4>Follow Us</h4>
        <div className="social-items">
        <ul>
            <li><a href="https://www.facebook.com/bhavna.ngo" target="_blank" rel="_noreferrer" ><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/bhavnawelfarefoundation/" target="_blank" rel="_noreferrer"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://in.linkedin.com/company/bhavnawelfarefoundation" target="_blank" rel="_noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
        </div>
      </div>
      <Container>
        <Row>
          <Col className="brand-container">
            <Image className="brand-logo" src={logo} />
          </Col>
          <Col>
            <h6 className="brand-name">Bhavna Welfare Foundation</h6>
            <Row className="contact-row">
              <span className="contact">
                <span className="icon">
                  <a href="https://maps.app.goo.gl/9jkcR6f9drqjDXD58" target="_blank" rel="_noreferrer"  style={{ textDecoration: 'none', color: 'inherit', cursor: 'default' }}><i className="bi bi-house-door-fill"></i></a>
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
