import React, { Component } from 'react';
import Carousel from '../Components/Carousel';
import ProductList from '../Components/ProductList';

class HomePage extends Component {
  render() {
    return (
      <div>
         <Carousel/>
          <div class="row">
            <ProductList/>
          </div>
      </div>
    )
  }
}

export default HomePage;
