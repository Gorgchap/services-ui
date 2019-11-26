import './App.css';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import Service from "./Service";

function App() {
  return (
      <><h2 style={{ textAlign: 'center' }}>Services</h2>
      <Row bsPrefix={'service-row'}>
          <Col xs={{span: 6, offset: 3}} sm={{span: 6, offset: 0}} md={4} lg={3}>
              <Service name={'Service 1'} />
          </Col>
          <Col xs={{span: 6, offset: 3}} sm={{span: 6, offset: 0}} md={4} lg={3}>
              <Service name={'Service 2'} />
          </Col>
          <Col xs={{span: 6, offset: 3}} sm={{span: 6, offset: 0}} md={4} lg={3}>
              <Service name={'Service 3'} />
          </Col>
          <Col xs={{span: 6, offset: 3}} sm={{span: 6, offset: 0}} md={4} lg={3}>
              <Service />
          </Col>
      </Row></>
  );
}
export default App;
