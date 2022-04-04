import React, { Component } from 'react'
import { Query } from 'react-apollo'
import SingleProduct from './SingleProduct'
import { GET_SINGLE_PRODUCT } from '../query/Query'

export default class ProductPage extends Component {
  render() {
      const {id} = this.props.match.params
      console.log(id)
    return (
      <div>
          <Query query={GET_SINGLE_PRODUCT} variables={{id}}>
              {
                  ({loading, error, data}) => {
                      if(loading) return <p>Loading...</p>
                      if(error) return <p>error</p>
                      const product = data.product
                      return (
                      <SingleProduct product={product} />
                      )
                  }
              }
              </Query>
      </div>
    )
  }
}
