import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const added=props.courseNum;
    const price=added.reduce((a,c)=>a+Number(c.price),0)
  
    return (
        <div className='cart-part position-fixed'>
            <h1>Cart Option</h1>
            <h2>Total Enroll:{added.length}</h2>
            <p>Total Price $:{price.toFixed(2)}</p>
        </div>
    );
};

export default Cart;