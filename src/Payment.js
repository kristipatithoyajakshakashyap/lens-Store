import React, { useState, useEffect } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios';
import { db } from './firebase';
import { Button } from '@material-ui/core';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [error,setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

   useEffect(() => {
        //generate the stripe secrete which allow to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
   }, [basket]) 
   console.log('the secrete is >> ', clientSecret)
  const handleSubmit = async(event) =>{
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method:{
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent })=>{
        //paymentIntent is payment confirmation
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })
        setSucceded(true);
        setError(null);
        setProcessing(false);
        history.replace('/orders');
        dispatch({ 
            type: 'EMPTY_BASKET'
        })
        
    })
  }

  const handleChange = (event) =>{
      //Listen for changesin the cardElement and diplay any error as the customer type their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : " ");
  }
  
  return (
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            {/* delivery address */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Hyderabad</p>
                    <p>Telangana</p>
                </div>
            </div>
            {/* Review Items */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payments_items">
                    {basket.map(item => (
                        <CheckoutProduct
                            id ={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                      ))}
                </div>
            </div>
            {/* Payment method */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <form onSubmit={handleSubmit}>
                    {user ? <CardElement onChange={handleChange}/> : "" }
                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                <h3>Order Total: {value} </h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"₹"}
                            />
                            {user ? 
                            <button
                             disabled={processing || disabled || succeded}
                            >{processing ?<p>Processing</p> : "Buy now" }</button> : 
                            <button><Link to="/login">Login</Link></button>}                            
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment