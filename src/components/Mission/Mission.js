import { Col, Container, div } from "react-bootstrap";
import "./Mission.css";

function Mission() {
  return (
    <div className="the-papa-container">
      <Container>
          <p className="intro">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
            vitae? Quisquam fugit soluta incidunt voluptatem aspernatur totam
            harum tempore sint repellendus, officia optio?
          </p>
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            nobis voluptatibus, sapiente nisi sit, accusamus est quasi quisquam
            temporibus a doloremque molestiae. Vel assumenda eaque obcaecati
            molestiae odit molestias repudiandae.
          </p>
          <p className="intro">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            obcaecati assumenda quos quae suscipit! Tempore laborum eos
            necessitatibus atque sed vero natus molestiae, rem odit, deleniti ad
            quaerat vel minus.
          </p>
          <div className="mission-container">
            <h3>Our Mission</h3>
            <p>
              To work for the under priviledged creating a society which
              recognized the right of all to live with honour and dignity.
              <br></br>Transforming individual potential into collective drive
              for change.
            </p>
          </div>
          <div className="mission-container">
            <h3>Our Vision</h3>
            <p>
              Providing a better tomorrow, a promising future and building a
              society with heart full of love and hands ready to help.
            </p>
          </div>
          <div className="mission-container">
            <h3>Our Values</h3>
            <div className="value-container">
              <span className="values">Dedication</span>
              <span className="values">Transparency</span>
              <span className="values">Transparency</span>
              <span className="values">Love for the cause</span>
              <span className="values">Integrity</span>
              <span className="values">Effciency</span>
              <span className="values">Effectiveness</span>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Mission;
