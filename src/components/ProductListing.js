// Shows the product list 
import React,{Fragment,Component} from 'react'
import {Panel,ListGroup,ListGroupItem} from 'react-bootstrap'

class ProductListing extends Component 
 {
     render()
     {      
      const { productname, description,price, availability} = this.props.showproduct[0];      
      return(           
          <React.Fragment>
            {this.props.showproduct.map(product => (
               
         <Panel bsStyle="primary">
         <Panel.Body>
         <ListGroup>
         <ListGroupItem id ='highlight'>{product.productname}</ListGroupItem>
         <ListGroupItem>{product.description}</ListGroupItem>
         <ListGroupItem>{product.price}</ListGroupItem>
         <ListGroupItem> {product.availability}</ListGroupItem>
         </ListGroup>
         </Panel.Body>
         </Panel>    
            ))}               
       </React.Fragment>
        
          
    );          
   }
 }

 export default ProductListing;

