import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../storage/img_1.jpg';

function AboutMe(){
    return(
        <Container fluid className="App-body-about App-body">
            <Row>
                <Col>
                <h2>Mario Suarez</h2>
                <p>
                Artista plástico nacido en Pitalito Huila en Julio de 1984, autodidacta con 21 años de experiencia en dibujo, pintura y escultura, en su obra al carboncillo se destaca el retrato, en su pintura podemos observar un universo infinito compuesto de figuras orgánicas en una danza de colores vibrantes en una narrativa acerca de la complejidad de la mente de su propio ser, en su escultura se destaca la figura humana cómo elemento principal, entre sus obras se encuentran monumentos públicos, monumentos en colecciones privadas.
Su obra se encuentra en países como estados unidos, México, argentina, panamá, España y londres.
                </p>
                </Col>
                <Col>
                    <img src={img1}  width="100%"  height="100%" className="img-fluid" alt='foto' />
                </Col>
            </Row> 
        </Container>
    );
}

export default AboutMe ;