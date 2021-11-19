import React, { useRef } from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import './AddReview.css';
import burgerBg from '../../../assets/burger_bg.png';

function AddReview() {
  const reviewTextRef = useRef();
  const clientNameRef = useRef();
  const clientImgRef = useRef();

  const reviewFormHandle = (e) => {
    e.preventDefault();
    const review = reviewTextRef.current.value;
    const client_name = clientNameRef.current.value;
    const client_img = clientImgRef.current.value;

    const reviewObj = { review, client_name, client_img };

    fetch('https://mysterious-beach-37319.herokuapp.com/addReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewObj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Review added successfully!');
          e.target.reset();
        }
      })
      ;
  }

  const bgImage = {
    backgroundImage: `url(${burgerBg})`
  };
  return (
    <div className="best_burgers_area" style={bgImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center mb-80">
              <span>Reviews</span>
              <h3>Add A Review</h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 offset-sm-3">
            <Form onSubmit={reviewFormHandle}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label><b>Review Text</b></Form.Label>
                <Form.Control as="textarea" rows={3} type="text" ref={reviewTextRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="price">
                <Form.Label><b>Client Name</b></Form.Label>
                <Form.Control type="text" ref={clientNameRef} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="discount">
                <Form.Label><b>Client Image URL</b></Form.Label>
                <Form.Control type="text" ref={clientImgRef} required />
              </Form.Group>
              <br /><br />
              <button className="popup-with-form" to="/">Add Review</button>
              <br /><br />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReview;