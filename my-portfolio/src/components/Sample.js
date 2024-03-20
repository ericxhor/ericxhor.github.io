import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

function Sample() {
  return (
    <section className="home-section" id="home" style={{ minHeight: "100vh" }}>
      <Container fluid style={{ backgroundColor: 'black', minHeight: "100vh" }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* Your content here */}
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Sample;
