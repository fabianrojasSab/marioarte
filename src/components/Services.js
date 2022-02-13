import { Container, Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import bg_1 from '../storage/backgrounds/bg_1.jpg';

function Services(){
    return(
        <Container fluid className="App-body-services App-body">
            <Row>
                <Col>
                <h2>Servicios</h2>
                    <CardGroup>

                        <Card style={{ width: '18rem' }} bg="secondary" border="info">
                            <Card.Img variant="top" src={bg_1} />
                            <Card.Body >
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} bg="secondary" border="info">
                            <Card.Img variant="top" src={bg_1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} bg="secondary" border="info">
                            <Card.Img variant="top" src={bg_1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} bg="secondary" border="info">
                            <Card.Img variant="top" src={bg_1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>

                </Col>
            </Row> 
        </Container>
    );
}

export default Services ;