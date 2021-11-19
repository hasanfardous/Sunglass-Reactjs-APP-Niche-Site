import { useState, useEffect } from 'react';
import { Container, Row, Form, Table } from 'react-bootstrap';
import './MyOrders.css';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import { useLocation, useHistory } from 'react-router';
import burgerBg from '../../../assets/burger_bg.png';

function MyOrders() {
  const [email, setEmail] = useState('');
  const { auth, user, error, isLoading, success, signInPopupUsingGoogle, doTheLogin, doTheRegistration } = useAuth();

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const specificUserUrl = `https://mysterious-beach-37319.herokuapp.com/orders?email=${user.email}`;
    fetch(specificUserUrl)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, []);

  const bgImage = {
    backgroundImage: `url(${burgerBg})`
  };

  const cancelOrderHandle = id => {
    const confirmation = window.confirm("Are you sure, to cancel the order?");
    if (confirmation) {
      console.log('Aggred');
      const deleteUrl = `https://mysterious-beach-37319.herokuapp.com/orders/${id}`;
      fetch(deleteUrl, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            alert('Order has been deleted!');
            const remainingOrders = orders.filter(order => order._id !== id);
            setOrders(remainingOrders);
          }
        })
    } else {
      console.log('Not aggred');
    }
  }
  return (
    <div className="best_burgers_area" style={bgImage}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center mb-80">
              <span>My Orders</span>
              <h3>Orders that you have made.</h3>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Title</th>
                <th>Product Shot Details</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.length > 0 ?
                  orders.map(order => <MyOrder key={order._id} data={order} cancelOrderHandle={cancelOrderHandle}></MyOrder>)
                  : <tr><td colSpan="4"><h2 className="text-center">Sorry no order added yet!</h2></td></tr>
              }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;