import * as React from 'react';
import * as ReactDom from 'react';
import Router from './Router';

import NavBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

class App extends React.Component {
    render(){
        return (
             <div className="App">
                <NavBar/>   
                <div className="container">
                <div className="row">
                  <div className="col-lg-3">
                  <Sidebar/>
                  </div>
                  <div className="col-lg-9">
                   <Router/>
                  </div>
                </div>
              </div>
            <Footer/>
            </div>
            
        );
    }
} 

export default App;