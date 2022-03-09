import React from 'react'
import { useStateValue } from './StateProvider';
import './Wishlist.css';
import WishlistProduct from './WishlistProduct';


function Wishlist() {
  const [{ basket, wishlist }, dispatch] = useStateValue();
  
  return (
    <div className="wishlist">
    <div className="wishlist_left">
        <h2 className="wishlist_title">
            Your Wishlist ( {wishlist?.length} items)    
        </h2>
        {wishlist.map(item =>(
           <WishlistProduct 
            id ={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
           />
         ))}           
       </div>        
    </div>
  )
}

export default Wishlist