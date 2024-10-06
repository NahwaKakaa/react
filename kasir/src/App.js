import './App.css';
import { Col, Row, Container } from 'react-bootstrap';
import React from 'react';
import {Hasil, ListCategories, NavbarComponent} from "./component";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Product List</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
