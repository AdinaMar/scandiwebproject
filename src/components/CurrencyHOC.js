import { graphql } from 'react-apollo'
import React, {Component} from 'react'
import { currency } from '../query/Query'
import Currency from "../components/Currency"

const withGraphQL = graphql(currency);
export default withGraphQL(Currency)