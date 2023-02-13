import { Container, Row, Col } from 'react-bootstrap';
import img_1 from '../storage/appreciations/img_1.jpeg';
import img_2 from '../storage/appreciations/img_2.jpeg';
import img_3 from '../storage/appreciations/img_3.jpeg';
import img_4 from '../storage/appreciations/img_4.jpeg';
import img_5 from '../storage/appreciations/img_5.jpeg';

function Appreciations(){
    return(
        <Container fluid className=" App-body">
            <Row>
                <h2>Reconocimientos</h2>
            </Row> 
            <Row className="row align-items-end p-4 App-body-appreciations" >
                <Col lg={6} sm={12}><img className="contact-img"   style={{ width: "100%", height: 600}} src={img_1}/></Col>
                <Col lg={6} sm={12}><img style={{ width: "100%", height: 300}} src={img_2}/>
                    <p>
                        Al conocer a la Sra. Martínez, en un centro comercial, ella es la cabeza de una función en la cual ayuda a perritos en estado de abandono y callejeros, ese fue un evento organizado por la alcaldía de Ibagué. fue la última rendición de cuenta del entonces alcalde Guillermo Alfonso Jaramillo, ese dibujo fue un retrato de su mascota Pinky y fue un obsequio en agradecimiento por su labor en cuanto a la creación de espacios para nuestras mascotas en la ciudad.
                    </p>
                </Col>
            </Row> 
            <Row className="row align-items-center p-4 App-body-appreciations" >
                <Col lg={5} sm={12}> <p>Al participar del negocio de Amway me di a conocer como artista y asistí a muchos eventos en los cuales mi boleto de entrada fueron los retratos de los oradores de cada evento. en este caso los oradores de ese evento fueron Jerónimo Vásquez (Diamante de Amway), Eliana Chacón (Esmeralda de Amway), ambos Colombia de esta forma mis obras viajaron a sur, centro y norte América </p> </Col>
                <Col lg={7} sm={12}>
                    <img style={{ width: 240, height: 500}} src={img_3}/>
                    <img style={{ width: 240, height: 500}} src={img_4}/>
                    <img style={{ width: 240, height: 500}} src={img_5}/>
                </Col>
            </Row> 
        </Container>
    );
}

export default Appreciations ;