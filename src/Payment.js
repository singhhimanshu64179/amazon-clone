import React from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const[{basket,user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const Elements = useElements();

    const handleSubmit = e =>{
        
    }

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Patna</p>
                        <p>Bihar</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Reveiw items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (<CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                    </div>
                    
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form>
                            <CardElement />
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Payment
