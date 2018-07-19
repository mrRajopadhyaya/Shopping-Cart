import React,{Component} from 'react';
import ReactDom from 'react';
import Router from './Router';

import NavBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

class App extends Component {
    render(){
        return (
             <div className="App">
                <NavBar/>   
                <div class="container">
                <div class="row">
                  <div class="col-lg-3">
                  <Sidebar/>
                  </div>
                  <div class="col-lg-9">
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