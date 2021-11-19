import { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const specificUserUrl = `https://mysterious-beach-37319.herokuapp.com/reviews`;
        fetch(specificUserUrl)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className="testimonial_area mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-60 text-center">
                            <span>Testimonials</span>
                            <h3>Happy Customers</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="testmonial_active owl-carousel">
                            <Carousel>
                                {
                                    reviews.map(review => <Carousel.Item key={review._id}>
                                        <Container>
                                            <Row>
                                                <Col lg={8}>
                                                    <Carousel.Caption className="text-center">
                                                        <p className="mx-auto">{review.review}</p>

                                                        <img src={review.client_img} className="img-fluid" alt={review.client_name} />
                                                        <h3>{review.client_name}</h3>
                                                    </Carousel.Caption>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Carousel.Item>)
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;