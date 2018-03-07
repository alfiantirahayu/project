import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link, Route} from 'react-router-dom';
import '../styles/Header.css';
import img from '../img/assets/diskon.jpg';
import img1 from '../img/assets/diskonn.jpg';
import img2 from '../img/assets/header.jpg';

 

class Header extends Component {
render() {
  return (
<div>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="/App">Myshoes22</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="/App">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="carousel slide" id="iniCarousel" data-ride="carousel">
            <ol class="carousel-indicators">
                    <li data-target="#iniCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#iniCarousel" data-slide-to="1" class="active"></li>
                    <li data-target="#iniCarousel" data-slide-to="2" class="active"></li>
                </ol> 
        <div class="carousel-inner">
                    <div class="item active">
                            <img src={img}/>
                    </div>
                    <div class="item">
                            <img src={img1}/>
                    </div>
                    <div class="item">
                            <img src={img2}/>
                    </div>
                    <a class="left carousel-control" href="#iniCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left">
                            </span></a>
                    <a class="right carousel-control" href="#iniCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right">
                            </span></a>
                </div>
    </div>
</div>
    );
  }
}

export default Header;