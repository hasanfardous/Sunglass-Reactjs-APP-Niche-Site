import { useRef, useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './Authentication.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import loginBg from '../../assets/loginbg.jpeg';
import { NavLink } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const { auth, user, isLoading, error, success, signInPopupUsingGoogle, doTheLogin, doTheRegistration } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/';
    console.log('redirect ', redirect);

    const loginFormHandle = (e) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        doTheLogin(email, password, history, redirect);
        e.preventDefault();
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInPopupUsingGoogle()
            .then(result => {
                history.push(redirect);
            })
    }

    const bgImage = {
        backgroundImage: `url(${loginBg})`
    };
    return (
        <div className="total-contact-area" style={bgImage}>
            <Container>
                <Row>
                    <div className="contact-wrapper login-form d-flex justify-content-center">
                        <div className="contact-content my-5 px-5 text-center">
                            <h2>Please Login First</h2>
                            <p>{error ? error : success}</p>
                            <Form onSubmit={loginFormHandle} className="mt-5">
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <br />
                                <button className="popup-with-form">Login</button>

                                <br />-------------------------<br />
                            </Form>
                            <NavLink className="popup-with-form" to="/register">New User? Register Here.</NavLink>
                            <br /><br />
                            <button className="popup-with-form" onClick={handleGoogleLogin} to="/">Signin with Google</button>
                            <br /><br />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Login;