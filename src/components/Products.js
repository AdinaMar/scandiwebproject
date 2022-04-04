import React, {Component} from "react";
import "../style/Products.css"
import AvailableProducts from "./AvailableProducts";
import UnavailableProducts from "./UnavailableProducts";
class Products extends Component {
    componentDidMount() {

    }
    render() {

        let products = [];
        this.props.products.map(category => {
            if(category.name === this.props.categoryName) {
                return products = category.products
            } else {
                return null
            }
        })
    
    

       
return (
    <div className="product-container">
        {console.log(products)
        }
        {

            products.map((product) => {
               

                if(product.inStock === true) {
                    return (
<AvailableProducts product = {product} /> 
                    )
                } else {
                    return (
                    <UnavailableProducts product={product} />
                    )
                
                }
                    
             } )
        }
    

        </div>
)

    }
}
export default Products;