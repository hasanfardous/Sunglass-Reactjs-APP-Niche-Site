import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { Col, Button, Modal, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import './Product.css';

const Purchase = () => {
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState({});
    const { title, price, discount, img_url, text } = singleItem;
    const { user } = useAuth();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Fetch data
    useEffect(() => {
        const url = `https://mysterious-beach-37319.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleItem(data))

    }, []);

    // Order handle
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const status = 'pending';
    const purchaseFormHandle = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        console.log('Form details ', name, email, address, phone, id, status);
        addPurchaseDataToDB(name, email, address, phone, id, status);
        handleClose();
    }

    // Add purchase data to db
    const addPurchaseDataToDB = (name, email, address, phone, product_id, status) => {
        const purchaseObj = { name, email, address, phone, product_id, status };

        // Send post request
        fetch('https://mysterious-beach-37319.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseObj)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order added successfully!');
                }
            })
            ;
    }

    return (
        <div className="our_department_area">
            <div className="container">
                <div className="row">
                    <Col lg={6} md={12} xl={6}>
                        <img src={img_url} className="img-fluid" alt={title} />
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }} md={12} xl={{ span: 5, offset: 1 }} className="d-flex justify-content-center flex-column">
                        <h2>{title}</h2>
                        <p>{text}</p>
                        <p>${price} <span>{discount}%</span></p>
                        <Button className="popup-with-form" onClick={handleShow}>Purchase</Button>
                    </Col>

                    {/* Modal content */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Please input your details.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={purchaseFormHandle} className="mb-5">
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label><b>Name</b></Form.Label>
                                    <Form.Control type="text" ref={nameRef} value={user.displayName} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control type="email" ref={emailRef} value={user.email} readOnly />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="text">
                                    <Form.Label><b>Address</b></Form.Label>
                                    <Form.Control type="text" ref={addressRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label><b>Phone</b></Form.Label>
                                    <Form.Control type="text" ref={phoneRef} required />
                                </Form.Group>
                                <br />
                                <button className="popup-with-form">Purchase</button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Purchase;