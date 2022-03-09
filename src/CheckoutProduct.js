import { Button } from '@material-ui/core';
import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        //remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    return (
    <div className="checkoutProduct">
        <img className='checkoutProduct_image' src={image} />
        <div className='checkoutProduct_info'>
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price"><small>₹</small>{price}</p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <Button
                style={{
                  marginRight: "10px",
                  borderRadius: 10,
                  backgroundColor: "#5cc8e6",
                  padding: "10px 15px",
                  fontSize: "15px"
              }}
              variant="contained"
              onClick={removeFromBasket}
              >Remove from Cart</Button>
            )}
            
        </div>
    </div>
  )
}

export default CheckoutProduct