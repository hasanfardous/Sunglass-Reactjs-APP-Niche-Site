import { useState } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './Authentication.css';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import authenticationImg from '../../assets/authentication.jpg';

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const { auth, user, error, isLoading, success, signInPopupUsingGoogle, doTheLogin, doTheRegistration } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || '/myorders';

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInPopupUsingGoogle()
      .then(result => {
        history.push(redirect);
      })
  }

  const bgImage = {
    backgroundImage: `url(${authenticationImg})`
  };
  return (
  <div className="total-contact-area" style={bgImage}>
    <Container>
      <Row>
        <div className="contact-wrapper d-flex justify-content-center">
          <div className="contact-content my-5 px-5 text-center">
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

export default Authentication;