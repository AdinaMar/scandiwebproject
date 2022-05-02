import Header from "./components/Header";
import './App.css';
import { categoryMain } from "./main/categoryMain";
import { Route} from 'react-router-dom'
import { Component } from "react";
import { Switch } from "react-router-dom";
import Main from "./main/Main";
import ProductPage from "./components/ProductPage";

class App extends Component {

  _isMounted = false;
    constructor(props) {
        super(props);

        this.state ={
            products: [],
            category: "all",
            currencies: "USD",
            isDropDown: false,
            showCart: false,
            bagItems: {}
        }
     
        this.displayCart = this.displayCart.bind(this);
        this.drop = this.drop.bind(this);
        this.changeCurrency = this.changeCurrency.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
      
    }
      
    componentDidMount() {
        this._isMounted = true;
            const {data} = this.props;
            categoryMain(data, "all").then(res => {
                if(this._isMounted) {
                    this.setState(res) } })


            const currency = localStorage.getItem("currencies") || "USD";
            this.setState({currencies: currency});
            
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        changeCurrency(currency) {
            this.setState({currencies:currency})
            this.drop();
            localStorage.setItem("currencies", currency)
        }

        drop() {
            this.setState({isDropDown: !this.state.isDropDown})
        }


        changeCategory(category) {
            if(this.props) {
                this.setState({category: category})
                const { data = {} } = this.props;
                categoryMain(data, category).then(res => {
                    this.setState(res)
                })
            }
        }

        displayCart() {
            this.setState({ showCart: !this.state.showCart })
        }

addCart(item) {
    this.setState({bagItems: {...item}})
}

 render() {

 
  return (

    <div className="App">
    
    <Header category={this.state.category}
               currencies= {this.state.currencies}
               changeCurrency = {this.changeCurrency}
               drop = {this.drop} 
               isDropDown = {this.state.isDropDown}
               changeCategory = {this.changeCategory}
               showCart = {this.state.showCart}
               displayCart = {this.displayCart}
               />

               <Switch>
                 

                 <Route  path="/product/:id" component={ProductPage}/>
                   
                 <Route  path="/">
                   <Main state={this.state} />
                 </Route>
               </Switch>

    </div>
 
  );
}
} 
export default App;
