import React, { Component } from 'react'
import "../style/Cart.css"
import emptyCart from "../images/Empty Cart.svg"
export default class Cart extends Component {
  render() {
    return (
 
      <div className="cart">
<img src={emptyCart} alt="empty cart" onClick={this.props.displayCart}/>
{ this.props.showCart ? (   <div className='show-cart'>   <h2>My Bag, <span> items</span> </h2>


<div className="total-price">
          <h2>Total</h2>
          <h2>Price</h2>

          </div>

          <div className="buttons">
              <button>VIEW BAG</button>
              <button> CHECK OUT</button>
          </div> </div> ) : null }
        
      </div>
       
    )
  }
}
