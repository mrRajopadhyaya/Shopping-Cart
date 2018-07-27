import * as React from 'react'
import {bindActionCreators} from 'redux';
import * as cartActions from '../../actions/cartActions';
import {connect} from 'react-redux';


interface PropsDataType {
  cartActions: any;
}
class ProductList extends React.Component<PropsDataType> {

  addCart = () =>{
    console.log(this.props.cartActions);
    this.props.cartActions();
  }

  componentDidMount(){
    fetch('https://my-json-server.typicode.com/mrRajopadhyaya/data/items')
      .then((res)=> res).then((items) =>{
        console.log(items,"items");
      }).catch()
  }

  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">Item One</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <button className='btn' onClick={this.addCart}>Add to cart</button>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
            </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch:any) =>{
  return {
    cartActions: bindActionCreators(cartActions.addToCart, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(ProductList);
