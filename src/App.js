import React, { Component } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Checkout from './components/Checkout';

class App extends Component {
  render() {
    return (
       <Router>
            <div className="App">
              <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                  </Routes>
             </div>
       </Router>
    );
  }
}
export default App;
