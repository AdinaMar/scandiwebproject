import React, {Component} from "react";
import "../style/Header.css";
import logo from "../images/Brand icon.svg";
import emptyCart from "../images/Empty Cart.svg";
import Categories from "./Categories";
import CurrencyHOC from "./CurrencyHOC";
import Cart from "./Cart";

class Header extends Component {
    render() {
        return (

<div className="header-container">
<Categories 
changeCategory={this.props.changeCategory}
 category={this.props.category} />
<img src={logo} alt="green logo"/>


<div className="currency-cart">
<CurrencyHOC isDropDown={this.props.isDropDown}
currencies = {this.props.currencies}
changeCurrency = {this.props.changeCurrency}
drop = {this.props.drop} />




  <Cart showCart={this.props.showCart}
  displayCart={this.props.displayCart}/>


</div>

</div>
        )
    }
}


export default Header;