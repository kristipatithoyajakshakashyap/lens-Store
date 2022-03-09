import React from 'react';
import './Product.css';
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }){
  const [{ basket, wishlist }, dispatch] = useStateValue();
  

  const addToBasket = () => {
    // dispatch the item into data layer
    dispatch({
      type : "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const addToWishlist= () => {
    // dispatch the item into data layer
    dispatch({
      type : "ADD_TO_WISHLIST",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product_info">
        <p> {title}</p>
        <div className="product_rating">
           <p className="product_price">
             <small> ₹ </small>
             <strong> {price}</strong>
             {Array(rating)
                .fill()
                .map((_,i)=>(
                <p>⭐</p>
             ))}
          </p>
          </div>
      </div>
      <div className="product_buttons">
         <Button
            style={{
              marginRight: "10px",
              borderRadius: 10,
              backgroundColor: "#5cc8e6",
              padding: "10px 15px",
              fontSize: "15px"
          }}
          variant="contained"
          onClick={addToBasket}
          >Add to cart </Button>
         <Button
         style={{
           borderRadius: 10,
           backgroundColor: "#5cc8e6",
           padding: "10px 15px",
           fontSize: "15px"
       }}
       variant="contained"
       onClick={addToWishlist}
       >Add to wishlist</Button>
         </div>
    </div>
  );
}

export default Product;
