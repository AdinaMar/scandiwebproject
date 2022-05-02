import React, { Component } from 'react'
import "../style/Attributes.css"


export default class Attributes extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const attributes = this.props.attributes;
        attributes.map((attribute, i) => this.setState({[attribute.id] : attribute.items[0].displayValue}))
    }

    attributeClick(id, value) {
        this.setState({[id] : value})
    }
  render() {

    const attributes = this.props.attributes;
    return (
      <div className="attr-container"> 
          {
          attributes.map((attribute, i) => {
              return (
                  <div className="wrapper" key={i}>
<h2>{attribute.name}:</h2>
{attribute.type === "swatch" && 
<span className='bar'>
    {
        attribute.items.map((item, i) => {
            return( 
             
                <span key={i}
                className={this.state[attribute.id] === item.displayValue ? "color active-attribute" : "color"}
                onClick={() => this.attributeClick(attribute.id, item.displayValue)} >

                    <div style={{backgroundColor:item.value, color: item.value}}>___</div>
                    <span>{item.displayValue}</span>
                    </span>
                    
        )
    
    
    
    
    
        } ) }  

            
              
           </span>   
          }
  
         {attribute.type === "text" &&
         <span className="bar">
             {attribute.items.map((item, i) => {
                 return(
                     <span key={i}
                     className={this.state[attribute.id] === item.displayValue ? " active-attribute" : ""}
                     onClick={() => this.attributeClick(attribute.id, item.displayValue)} >
                         <div >{item.value}</div>
                         </span>
                 )
             })}
         </span>
        
        }
        </div>)
          })}

          </div>
    )
  }
}
