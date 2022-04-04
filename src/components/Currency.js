import React, {Component} from "react";
import "../style/Currency.css";
import vectorUp from "../images/Vector (1).svg"
import vectorDown from "../images/Vector.svg"


class Currency extends Component {
    render() {
        const {currencies = []} = this.props.data;


        if (this.props.isDropDown) {
            return (
                <div className="container">
                <p onClick={()=>this.props.drop()}> {this.props.currencies} <img src={vectorUp} alt="vector up"/> </p>
                <ul className="dropdown-currency">
                    {
                        currencies.map((item) => (
                        <li onClick= {()=>this.props.changeCurrency(item.symbol)} key = {item.symbol}>{item.symbol} {item.label}</li>
                        )) }
                </ul>
                </div>
                
            )
        } else {
            return <div onClick={()=>this.props.drop()}> {this.props.currencies} <img src={vectorDown} alt="vector down" />
               </div>
               
        }
    }
}

export default Currency;