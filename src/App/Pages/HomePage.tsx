import  * as React from 'react';
import Carousel from '../Components/Carousel';
import ProductList from '../Components/ProductList';

class HomePage extends React.Component {
  render() {
    return (
      <div>
         <Carousel/>
          <div className="row">
            <ProductList/>
          </div>
      </div>
    )
  }
}

export default HomePage;
