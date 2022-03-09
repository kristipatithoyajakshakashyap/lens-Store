import React from 'react';
import './Subtotal.css';
import CurrencyFormat from  "react-currency-format";
import { Button } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal(){
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
          />
         <Button
            style={{
              marginRight: "10px",
              borderRadius: 10,
              backgroundColor: "#5cc8e6",
              padding: "10px 15px",
              fontSize: "15px"
          }}
          variant="contained" 
          onClick={e => history.push('/payment')}
          >Proceed to Checkout </Button>
    </div>
  );
}

export default Subtotal;
