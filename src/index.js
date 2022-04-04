import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache} from '@apollo/client'
import { ApolloProvider } from "react-apollo"

import {BrowserRouter, Route} from 'react-router-dom'
import AppHOC from './AppHOC';


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <BrowserRouter>
    <Route path="/" component={AppHOC} />
    </BrowserRouter>
  </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

