import React from "react";
import logo from './../../images/logodeastvantage.png';
import logoname from "./../../images/evtagelogo.png";
import { Container, Row, Col } from "react-bootstrap";
const HeaderComponent = () => {
    return (

        <Container className="App-header">
            <Row>
                <Col md={12}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={logoname} className="app-logo-header" alt="logo name" />
                </Col>
            </Row>
        </Container>

    );
}

export default HeaderComponent;