import AreaOfrectangle from "./Component/AreaOfrectangle";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Component/header";
import { Tablex } from "./Component/table";
import Lables from "./Component/Floating";
import Bottomx from "./Component/Bottomx";
function rectangle() {
  return (
    <div className="mycollect">
      <Header />
      <Tablex />
      <Lables />
      <Container>
        <Row>
          <Col>
            <AreaOfrectangle />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Bottomx />
      <p> pinax</p>
      <AreaOfrectangle />
    </div>
  );
}

export default rectangle;
