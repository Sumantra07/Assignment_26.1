import React, { Component } from 'react';
import {Grid, Col, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header.js';
import ProductForm from './components/ProductForm.js';
import ProductListing from './components/ProductListing.js';
import ErrorBoundary from './components/ErrorBoundary.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  
  addProduct = product => {  
    
    this.setState({products:[product,...this.state.products]});
    
  };
  
  render() {

    return (    
  <Grid>
  <Row className="show-grid">
    <Col xs={12} md ={4}>
    <Header></Header>
    </Col>
    </Row>
  <Row className="show-grid">
    <Col xs={6} md={4}>
    <div>
    <ErrorBoundary>
    <ProductForm add = {this.addProduct}></ProductForm>
    </ErrorBoundary>
    </div>
    </Col> 
    <Col xs={6} md={4}>
    <ErrorBoundary>
    <ProductListing showproduct = {this.state.products} ></ProductListing>
    </ErrorBoundary>
    </Col>
  </Row>
</Grid>
      
    );
  }
}

export default App;
