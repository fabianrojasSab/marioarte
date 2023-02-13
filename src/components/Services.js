import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import bg_1 from '../storage/backgrounds/bg_2.jpeg';
import bg_2 from '../storage/backgrounds/bg_4.jpeg';
import img_1 from '../storage/services/esculture/img_1.jpeg';
import img_2 from '../storage/services/esculture/img_2.jpeg';
import img_3 from '../storage/services/esculture/img_3.jpeg';
import img_4 from '../storage/services/picture/img_4.jpeg';
import img_5 from '../storage/services/picture/img_5.jpeg';
import img_6 from '../storage/services/picture/img_6.jpeg';

import React, { useState } from 'react';

function EscultureModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Esculturas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>          
            <Row><h4>MarioArte</h4></Row>
            <Row><p>Estas son algunas de las esculturas hechas</p></Row>
            <Row>
            <Col><img src={img_1} width="200rem"  height="80%" alt="Logo"/></Col>
            <Col><img src={img_2} width="200rem"  height="80%" alt="Logo"/></Col>
            <Col><img src={img_3} width="200rem"  height="300rem" alt="Logo"/></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function PictureModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Retratos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row><h4>MarioArte</h4></Row>
          <Row><p>Estas son algunas de os retratos hechos</p></Row>
          <Row>
            <Col><img src={img_4} width="200rem"  height="300rem" alt="Logo"/></Col>
            <Col><img src={img_5} width="200rem"  height="300rem" alt="Logo"/></Col>
            <Col><img src={img_6} width="200rem"  height="300rem" alt="Logo"/></Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Services(){
    const [modalShowEsculture, setModalShowEsculture] = useState(false);
    const [modalShowPicture, setModalShowPicture] = useState(false);

    return(
        <Container fluid className=" App-body ">
            <EscultureModal show={modalShowEsculture} onHide={() => setModalShowEsculture(false)} />
            <PictureModal show={modalShowPicture} onHide={() => setModalShowPicture(false)} />
            
            <h2>Servicios</h2>

            <Row className="App-body-services p-4" >
                <Col>
                    <Card style={{ width: '18rem'}} bg="secondary" border="info">
                        <Card.Img variant="top" style={{ height: '28rem' }} src={bg_1} />
                        <Card.Body >
                            <Card.Title>Esculturas</Card.Title>
                            <Button variant="primary" onClick={() => setModalShowEsculture(true)}>Ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} bg="secondary" border="info">
                        <Card.Img variant="top" style={{ height: '28rem' }}  src={bg_2} />
                        <Card.Body>
                            <Card.Title>Retratos</Card.Title>
                            <Button variant="primary" onClick={() => setModalShowPicture(true)}>Ver más</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
        </Container>
    );
}

export default Services ;