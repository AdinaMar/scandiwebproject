import React, {Component} from "react";
import { categories } from "../query/Query";
import {graphql} from "react-apollo"
import { Link } from "react-router-dom";

class Categories extends Component {
    componentDidMount() {

    }
    render() {


        const { categories = [] } = this.props.data;
        return(

            <ul className="first-section-header"> {
                
                categories.map((category, i) =>
              <Link  to={`/${category.name}`} className="link"> <li onClick={() => this.props.changeCategory(category.name)}> {category.name} </li>  </Link>  
                )
                
                }
                
            </ul>

        )
    }
}

export default graphql(categories)(Categories);