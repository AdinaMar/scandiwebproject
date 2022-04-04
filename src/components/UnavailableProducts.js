import react, {Component} from "react";
import { Link } from "react-router-dom";
import "../style/UnavailableProducts.css";

class UnavailableProducts extends Component {
    render() {

        return(

            <Link to={`/product/${this.props.product.id}`} className="products-map-unavaialable" key={this.props.product.name}>
                <div className="overlay">
                <div className="outofStock"><h4>OUT OF STOCK </h4></div>
            <img src={this.props.product.gallery[0]} alt={this.props.product.name}/>
            </div>
            <p>{this.props.product.brand} {this.props.product.name}</p>
           
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
export default UnavailableProducts;