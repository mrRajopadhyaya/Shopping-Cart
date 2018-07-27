import * as React from 'react';
import {connect} from 'react-redux';

interface PropsDataType {
  cart: any;
}


 const NavBar = (props:any) => {
  let cartNum = props.cart.length;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login/Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cart
              <span className="badge badge-light mr-lf-5">{cartNum}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state:any)=>{
  debugger;
  return ({
    cart: state.cartReducers
  })

}


export default connect(mapStateToProps)(NavBar);
