import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrder = (props) => {
  const { _id, name, email, address, phone, product_id, status } = props.data;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const productUrl = `https://mysterious-beach-37319.herokuapp.com/product/${product_id}`;
    fetch(productUrl)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, []);
  const { title, img_url, price, discount, text } = product;

  const cancleIconStyles = {
    cursor: 'pointer',
    color: 'red',
    fontSize: '32px',
  }
  return (
    <tr>
      <td><img width="90" height="90" src={img_url} alt={title} /></td>
      <td><b>{title}</b></td>
      <td>{text?.substring(0, 50)}..</td>
      <td>${price}</td>
      <td><FontAwesomeIcon onClick={() => props.cancelOrderHandle(_id)} icon={faTimesCircle} style={cancleIconStyles} /></td>
    </tr>
  );
};

export default MyOrder;