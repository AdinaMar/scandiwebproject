import React, {Component} from 'react'
import {categoryMain} from './categoryMain'
import Header from '../components/Header';
import { Query } from 'react-apollo';
import {productsCard} from '../query/Query'
import Products from '../components/Products';
import "../style/Main.css";


class Main extends Component {
    
       render(){

       return(
           <>
            <div className="Main">

               




            </div>
            <h1 className="title">{this.props.state.category}</h1>
            <Query query={ productsCard }>

            {({loading, error, data}) => {
                if(loading) return <p>Is Loading...</p>
                if(error) return <p>Error!</p>
               
                return (<Products products = {data.categories}
                    categoryName = {this.props.state.category} />)
            }}
            
            </Query>

            </>
        )
        
    
}
}
export default Main;