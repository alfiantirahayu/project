import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

import './App.css';
import data from "./json/data.json";

class App extends Component {
  render() {
    return (
      <div>
  <Header/>
<br/><br/>  
  <div class="container-fluid">
  <div class="row content">
    <div class="col-sm-3 sidenav">
      <h4>Category</h4>
      <ul class="nav nav-pills nav-stacked">
        <li><a href="#section2">Adidas</a></li>
        <li><a href="#section3">Asics</a></li>
        <li><a href="#section3">Nike</a></li>
      </ul><br/>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search"/>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
        </div></div>



<div class="col-sm-9" />
        <div class="row" >
        <h1 id="shop" class="text-center">Shop</h1><br/><br/>
       {data.map(function(item){
        return<div id="produk">
          <div class="col-sm-2">
          <div class="thumbnail">
          <img id="prdk" src={ process.env.PUBLIC_URL + item.picture}/>
          <p><strong>{item.name}</strong></p>
          Details : <br/> {item.harga} <br/>{item.size}
          </div></div></div>})}</div></div>

  </div>
  
  
  <Footer/>
  </div>
      );
    }
  }
  
  export default App;
