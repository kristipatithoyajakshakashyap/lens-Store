import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header(){
  const [{ basket,wishlist,user }, dispatch] = useStateValue();
  const handelAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      {/* image */}
      <Link to="/">
        <img
        className="header_logo"
        src="/images/logo.jpg"
        alt="" />
      </Link>
      {/* search */}
      <div className="header_search">
         <input type="text" className="header_searchInput" placeholder="Which model would you like to have"/>
         <SearchIcon />
      </div>
      {/* Links */}
      <div className="header_nav">
       
          <div className="header_option">
          <span className="Header-optionLineOne">Hello</span>
          <span className="Header-optionLineTwo">{user? user.email: 'Guest'}</span>
          </div>
        
        <Link to={!user && "/login"} className="header_link">
          <div className="header_option" >
            <span onClick={handelAuthentication}> {user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="/wishlist" className="header_link">
          <div className="header_option">
            <span className="header_optionWish"> <FavoriteBorderOutlinedIcon/>Wishlist <sup>{wishlist?.length}</sup></span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
        <span className="header_basketCount"> {basket?.length} </span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
