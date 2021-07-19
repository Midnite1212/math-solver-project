import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import '../styles/mainmenu.scss';


const MainMenu = () => {
  return(
    <div>
			<Container>
        <div style ={{marginTop:"30px"}}>
          <HeroBanner />
        </div>
          <Row>
            <Col md = {2} className="useful-materials">
                <Card>
                  <h5>Useful Materials</h5>
                  <Link>Trigonometry Identities</Link>
                  <Link>Statistics Tables</Link>
                </Card>
              </Col>
              <Col md = {5}>
                <Row>
                  <Button href="simple-calculator" className = "calculator-button simple">Simple Calculator</Button>
                </Row>
                <Row>
                  <Button href="scientific-calculator" className = "calculator-button">Scientific Calculator</Button>
                </Row>
              </Col>
              <Col md = {5}>
                <Row>
                  <Button href="finance-calculator" className = "calculator-button">Finance Calculator</Button>
                </Row>
                <Row>
                  <Button href="graphing-calculator" className = "calculator-button">Graphing Calculator</Button>
                </Row>
              </Col>
          </Row>
          <Row>
              <Col md ={2}></Col>
              <Col md = {10} style ={{textAlign:"center", marginBottom: "10px"}}>More coming soon...</Col>
          </Row>
				</Container>
    </div>
  );
}

export default MainMenu;