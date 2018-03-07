import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import '../styles/Produk.css';
import Popup from './components/Popup.js';
import './App.css';
import data from "./json/data.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div>
  <Header/>
  
  
  
  <div id="prdk" class="container-fluid text-center">
  <div class="row">
        {data.map(function(item){
        return<div id="produk">
          <div class="col-sm-3">
          <div class="thumbnail">
        <img src={ process.env.PUBLIC_URL + item.picture}/>
      <p><strong>{item.name}</strong></p>
      <button class="btn btn-lg" data-toggle="modal" href="/App">Details</button>
      </div>    </div>    </div>
  })}

    </div>       </div>



  <Footer/>
  </div>
      );
    }
  }
  
  export default App;
