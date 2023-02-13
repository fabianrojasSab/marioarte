import { Container, Row, Col } from 'react-bootstrap';
import img_1 from '../storage/briefcase/img_1.jpeg';
import img_2 from '../storage/briefcase/img_2.jpeg';
import img_3 from '../storage/briefcase/img_3.jpeg';
import img_4 from '../storage/briefcase/img_4.jpeg';
import img_5 from '../storage/briefcase/img_5.jpeg';
import img_6 from '../storage/briefcase/img_6.jpeg';
import img_7 from '../storage/briefcase/img_7.jpeg';
import img_8 from '../storage/briefcase/img_8.jpeg';
import img_9 from '../storage/briefcase/img_9.jpeg';
import img_10 from '../storage/briefcase/img_10.jpeg';
import img_11 from '../storage/briefcase/img_11.jpeg';
import img_12 from '../storage/briefcase/img_12.jpeg';
import img_13 from '../storage/briefcase/img_13.jpeg';
import img_14 from '../storage/briefcase/img_14.jpeg';



const images = [
    { src: "https://picsum.photos/id/1018/1920/1080/", aspect_ratio: 16/9 },
    { src: "https://picsum.photos/id/1015/1920/1080/", aspect_ratio: 16/9 },
]

const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

function Breifcase(){



    return(
        <Container fluid className="App-body ">
            <Row>
                <h2>portafolio</h2>
            </Row>
            
            <Row className="p-4 App-body-briefcase">
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_1}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_2}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_3}/></Col>
            </Row>

            <Row  className="p-4">
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_4}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }}  src={img_5}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_6}/></Col>
            </Row>

        
            <Row  className="p-4">
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_7}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_8}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_9}/></Col>
            </Row>

            <Row  className="p-4">
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_10}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_11}/></Col>
                <Col lg={4} sm={12}><img style={{ width: "100%", height: 600 }} src={img_12}/></Col>
            </Row>

            <Row  className="p-4">
                <Col lg={6} sm={12}><img style={{ width: "100%", height: 600 }} src={img_13}/></Col>
                <Col lg={6} sm={12}><img style={{ width: "100%", height: 600 }} src={img_14}/></Col>
            </Row>

        </Container>
    );

}

export default Breifcase ;