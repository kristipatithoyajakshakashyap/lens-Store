import { Button } from '@material-ui/core';
import React from 'react';
import './WishlistProduct.css';
import { useStateValue } from './StateProvider';

function WishlistProduct({id, image, title, price, rating}) {
    const [{basket, Wishlist}, dispatch] = useStateValue()

    const removeFromWishlist = () => {
        //remove from wishlist
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            id: id,  
        })
    }
    
    return (
    <div className="WishlistProduct">
        <img className='WishlistProduct_image' src={image} />
        <div className='WishlistProduct_info'>
            <p className="WishlistProduct_title">{title}</p>
            <p className="WishlistProduct_price"><small>₹</small>{price}</p>
            <div className="WishlistProduct_rating">
                {Array(rating)
                .fill()
                .map((_,i) => (
                    <p>⭐</p>
                ))}
            </div>
            <Button
            style={{
              marginRight: "10px",
              borderRadius: 10,
              backgroundColor: "#5cc8e6",
              padding: "10px 15px",
              fontSize: "15px"
          }}
          variant="contained"
          onClick={removeFromWishlist}
          >Remove from Wishlist</Button>
        </div>
    </div>)
}

export default WishlistProduct