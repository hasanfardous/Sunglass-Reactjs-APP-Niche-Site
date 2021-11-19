import { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';

const Products = (props) => {
    console.log(props);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-beach-37319.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleInsertingOrder = offer => {
        console.log('Inserting order', offer);
        const newOrders = [...orders, offer];
        setOrders(newOrders);
        // console.log(orders);
    };
    {
        console.log(orders.data?._id);
    }
    return (
        <div id="offers" className="Burger_President_area clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title mb-60 text-center">
                            <span>Hot Deals</span>
                            <h2 className="mb-5">Our Products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="Burger_President_here">
                        {
                            products.slice(0, 6).map(product => <Product key={product._id} data={product} handleInsertingOrder={handleInsertingOrder} showPurchase={props.showPurchase}></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;