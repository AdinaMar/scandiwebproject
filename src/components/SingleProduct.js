import React, { Component } from 'react'
import "../style/SingleProduct.css";

export default class SingleProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {productimg: this.props.product.gallery[0]}
    }

    setImage(image) {
        this.setState({productimg:image})
    };

    hideHTML(description) {
        return {__html: description}
    }
    
  render() {
    
const {gallery, name, brand, attributes, prices, description } = this.props.product
     

return (
    
      <div className="single-product-container">
         <div className="images-container">
          <div className="images">

              {gallery.map(img => 
                 <img src={img} alt={name} onClick={() => this.setImage(img)} />
              )}
          </div>
          <img src={this.state.productimg} alt={name} />
          </div>

          <div className="infos">
              
          <h2> {brand}</h2>
          <h2> {name}</h2>
          <h3>Price:</h3>
{
    prices.map(price => {
        if(price.currency.symbol === localStorage.getItem("currencies")){

        return (<h2>{price.currency.symbol} {price.amount}</h2>);
         } else return null;
    })

}
<button>ADD TO CART</button>     
<div dangerouslySetInnerHTML={this.hideHTML(description)}></div>
          </div>
          
          </div>
    )
  }
}
