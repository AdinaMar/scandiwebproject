import { graphql } from "react-apollo";
import App from "./App";
import { productsCard } from "./query/Query";

const withGraphQL = graphql(productsCard)

export default withGraphQL(App);