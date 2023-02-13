import { Container, Row, Carousel } from 'react-bootstrap';
import img_1 from '../storage/carousel/img_1.jpeg';
import img_2 from '../storage/carousel/img_2.jpeg';
import img_3 from '../storage/carousel/img_3.jpeg';
import img_4 from '../storage/carousel/img_4.jpeg';
import img_5 from '../storage/carousel/img_5.jpeg';

function Home(){
    return(
        <Container fluid className="App-body-home App-body">
            <Row>
                <h2>Escultor, pintor y amante del arte</h2>
            </Row> 
            <Carousel>

                <Carousel.Item>
                    <img src={img_1} width="100%"  height="500" alt="Logo"/>
                    <Carousel.Caption>
                    <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img_2} width="100%"  height="500" alt="Logo"/>
                    <Carousel.Caption>
                    <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img_3} width="100%"  height="500" alt="Logo"/>
                    <Carousel.Caption>
                    <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img_4} width="100%"  height="500" alt="Logo"/>
                    <Carousel.Caption>
                    <h3></h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src={img_5} width="100%"  height="500" alt="Logo"/>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    );
}

export default Home ;