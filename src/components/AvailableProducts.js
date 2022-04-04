import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "../style/Products.css"

class AvailableProducts extends Component {
    render() {
        return (

            <Link to={`/product/${this.props.product.id}`} className="products-map" key={this.props.product.name}>
                        <img src={this.props.product.gallery[0]} alt={this.props.product.name}/>
                        <p >{this.props.product.brand} {this.props.product.name}</p>
                       
                      <div> 
                          {
                              this.props.product.prices.map((price) => {
                                  if(price.currency.symbol === localStorage.getItem("currencies")) {
                                      return (
                                          <p className="price">{price.currency.symbol} {price.amount} </p>
                                      )
                                  } else {
                                      return null;
                                  }
                              })
                          }
                        </div>
              
            </Link>
        )
    }
}

export default AvailableProducts;