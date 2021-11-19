import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../assets/banner1.jpeg';
import banner2 from '../../assets/banner2.jpeg';
import './Slider.css';
import { NavLink } from 'react-router-dom';

const Slider = () => {
    const sliderDatas = [
        { id: 1, img: banner1, title: 'Fashionable Glass', caption: 'You looks gorgeous' },
        { id: 2, img: banner2, title: 'Stylish Glass', caption: 'Did you wear it?' }
    ];

    return (
        <Carousel fade>
            {
                sliderDatas.map(slider => <Carousel.Item className="overlay" key={slider.id}>
                    <img src={slider.img} className="d-block w-100" alt={slider.title} />
                    <Container>
                        <Row className="align-items-center justify-content-center">
                            <Col className="col-xl-9 col-md-9 col-md-12">
                                <Carousel.Caption className="text-center">
                                    <h3>{slider.title}</h3>
                                    <p>{slider.caption}</p>
                                    <NavLink to="/explore" className="popup-with-form mt-4">Explore Now</NavLink>
                                </Carousel.Caption>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Slider;