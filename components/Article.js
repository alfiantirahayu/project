import React, { Component } from 'react';
import img1 from '../assets/ads1.JPG';
import img2 from '../assets/ads2.JPG';


class Article extends Component {
render() {
  return (
    <div>
<div class="container text-center">    
  <h3>What We Do</h3> <br/>
  <div class="row"/>
    <div class="col-sm-4"/>
      <img src={img1}/>
      <p>Current Project</p>
    </div>
    <div class="col-sm-4"> 
      <img src={img2}/>
      <p>Project 2</p>    
    </div>
    </div>
    
    );
  }
}

export default Article;