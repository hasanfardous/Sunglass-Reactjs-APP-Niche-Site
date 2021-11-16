import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import about1 from '../../assets/about1.jpeg';
import about2 from '../../assets/about2.jpeg';
import signature from '../../assets/signature.png';
import './About.css';

const About = () => {
    return (
        <div className="about_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about_thumb2">
                            <div className="img_1">
                                <img src={about1} alt="about first" />
                            </div>
                            <div className="img_2">
                                <img src={about2} alt="about second" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 offset-lg-1 col-md-6">
                        <div className="about_info">
                            <div className="section_title mb-20px">
                                <span>About Us</span>
                                <h3>Fashionable Sunglasses</h3>
                            </div>
                            <p>They come in all shapes and sizes. Some are made for fashion rather than function. You probably have a favorite pair. Sunglasses make it easier for you to see on a bright day. The right ones can protect your eyes for years, but the wrong kind can do more harm than good. They come in all shapes and sizes. Some are made for fashion rather than function. You probably have a favorite pair. Sunglasses make it easier for you to see on a bright day. The right ones can protect your eyes for years, but the wrong kind can do more harm than good.</p>
                            <p>Some are made for fashion rather than function. You probably have a favorite pair. Sunglasses make it easier for you to see on a bright day. The right ones can protect your eyes for years, but the wrong kind can do more harm than good. They come in all shapes and sizes. Some are made for fashion rather than function. You probably have a favorite pair.</p>
                            <div className="img_thumb">
                                <img src={signature} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;