import { Container, Row, Col } from 'react-bootstrap';
import logo from '../logo.jpg';
import whatsapp from '../storage/contact/whatsapp_icon.jpeg';
import facebook from '../storage/contact/facebook_icon.jpeg';
import instagram from '../storage/contact/instagram_icon.jpeg';

function Contact(){
    return(
        <Container fluid className="App-body-contact">
            <Row>
                <Col><img src={logo}  width="60"  height="60" alt="Logo" className="contact-img" /></Col>
                <Col>MarioArte</Col>
            </Row> 
            <Row>
                <Col> marioesculturas@yahoo.es </Col>
            </Row> 
            <Row className='contact-icons'>
                <Col><a href="https://wa.me/573197189616"><img href="https://wa.me/573197189616" src={whatsapp}  width="40"  height="40" alt="Logo" className="contact-img" /></a></Col>
                <Col><a href="https://www.facebook.com/Artvid.arteypublicidad" ><img src={facebook}  width="40"  height="40" alt="Logo" className="contact-img" /></a></Col>
                <Col><a href="https://www.instagram.com/mario.suarez_art.studio"><img  src={instagram}  width="40"  height="40" alt="Logo" className="contact-img" /></a></Col>
            </Row> 
        </Container>
    );
}

export default Contact ;