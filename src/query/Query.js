import { gql } from "apollo-boost";


export const categories = gql `

       query {
           categories {
               name
           }
       }
`;

export const productsCard = gql `

    query  {
		categories {
			name
			products {
				id
				name
				brand
				inStock
				gallery
				attributes {
					id
					name
					type
					items {
						displayValue
						value
					}
				}
				description
				prices {
					currency {
            label
            symbol
          }
					amount
				}
			}
		}
}

`;

export const currency = gql `    

query {
  		currencies {
        label
        symbol
      }
	}

`



export const GET_SINGLE_PRODUCT = gql`
query($id: String!)  {
product(id: $id) {
id
name
inStock
gallery
description
category
attributes {
  id
  name
  type
  items {
    displayValue
    value
    id
  }
}
prices {
  currency {
    label
    symbol
  }
  amount
}
brand
}
  }`