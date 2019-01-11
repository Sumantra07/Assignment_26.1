// Shows the product form
import React,{Fragment,Component} from 'react';
import {Button,Checkbox,Form,FormControl,FormGroup,ControlLabel,HelpBlock} from 'react-bootstrap';

class ProductForm extends Component 
 {
     constructor(props){
     super(props);
     this.state = this.getInitialState();
     }
     getInitialState = () => {
        return {
          data: {
            productname: "",
            description: "",
            price:"",
            availability:false
          },
        };
      };
      handleSubmit = e => {
      if(this.state.data.availability== false)
      {
          const product = {
          productname: this.state.data.productname,
          description: this.state.data.description,
          price:this.state.data.price,
          availability:"Availability ? No"
        };
        this.props.add(product);
      }
       else 
       {
        const product = {
          productname: this.state.data.productname,
          description: this.state.data.description,
          price:this.state.data.price,
          availability:this.state.data.availability
        };
        this.props.add(product);
       }
        
        
        this.setState(this.getInitialState);
        e.preventDefault();
      
      };
      handleChange = e => {
       if (e.target.name =='availability')
        { 
          var availabilitystatus ='';
          if(e.target.checked)
          {
            availabilitystatus = "Available? Yes";
          }
          else{
            availabilitystatus = "Available? No";
          }
          this.setState({
            data: {
              ...this.state.data,
              [e.target.name]: availabilitystatus
            }
          });
        }
        else { 
        this.setState({
          data: {
            ...this.state.data,
            [e.target.name]: e.target.value
          }
        });
      }
      };
     render()
     {
      const { productname, description,price, availability} = this.state.data;     
        return(       
           <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="productname">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            value={productname}
            name="productname"
            onChange={this.handleChange}         
          />  
             
         </FormGroup>
         <FormGroup controlId="description">
         <ControlLabel>Description</ControlLabel>
         <FormControl
            value={description}
            name="description"
            onChange={this.handleChange}          
          />
          
        </FormGroup>
        <FormGroup controlId="price">
          <ControlLabel>Price</ControlLabel>
          <FormControl
            value={price}
            name="price"
            onChange={this.handleChange}
            
          />
         
        </FormGroup>
        <FormGroup>
          <Checkbox 
           value={availability}
           name="availability"
           defaultChecked={this.state.data.availability}
           onChange={this.handleChange}>
           {' Available'}
           </Checkbox>
          
        </FormGroup>
        <Button type="submit" bsStyle="primary">
          Save
        </Button>
      </form>
    );          
   }
 }

 export default ProductForm;




