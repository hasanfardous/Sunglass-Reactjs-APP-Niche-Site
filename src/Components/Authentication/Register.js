import { useRef, useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './Authentication.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import authenticationImg from '../../assets/authentication.jpg';
import { NavLink } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();
    const { auth, user, isLoading, error, success, signInPopupUsingGoogle, doTheRegister, doTheRegistration } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const registerFormHandle = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const rePassword = rePasswordRef.current.value;
        if (password !== rePassword) {
            alert('Password did not matched!');
            return;
        }
        doTheRegistration(name, email, password, history);
        e.preventDefault();
    }

    const bgImage = {
        backgroundImage: `url(${authenticationImg})`
    };
    return (
        <div className="total-contact-area" style={bgImage}>
            <Container>
                <Row>
                    <div className="contact-wrapper login-form d-flex justify-content-center">
                        <div className="contact-content my-5 px-5 text-center">
                            <h2>Please Register With Your Details</h2>
                            <p>{error ? error : success}</p>
                            <Form onSubmit={registerFormHandle} className="mt-5">
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label><b>Name</b></Form.Label>
                                    <Form.Control type="text" ref={nameRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="rePassword">
                                    <Form.Label><b>Re Enter Password</b></Form.Label>
                                    <Form.Control type="password" ref={rePasswordRef} required />
                                </Form.Group>
                                <br />
                                <button className="popup-with-form">Register</button>
                                <NavLink className="popup-with-form" to="/login">Existing User? Login here.</NavLink>
                                <br />-------------------------<br />
                            </Form>
                            <br /><br />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Register;