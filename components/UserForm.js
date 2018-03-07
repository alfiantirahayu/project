import React, { Component } from 'react';
import img1 from '../assets/ads1.jpg';
import img2 from '../assets/ads2.jpg';
import img3 from '../assets/ads3.jpg';
import img4 from '../assets/ads4.jpg';
import img5 from '../assets/asics.jpg';
import img6 from '../assets/nike1.jpg';
import img7 from '../assets/nike2.jpg';
import img8 from '../assets/nike3.jpg';
import img9 from '../assets/nike4.jpg';

class UseForm extends Component {
render() {
  return (
    <div>
<div class="container text-center">    
  <h3>What We Do</h3> <br/>
  <div class="row"/>
    <div class="col-sm-4"/>
      <img src={img1} class="img-responsive" style="width:100%" alt="Image"/>
      <p>Current Project</p>
    </div>
    <div class="col-sm-4"> 
      <img src={img2} class="img-responsive" style="width:100%" alt="Image"/>
      <p>Project 2</p>    
    </div>
    </div>
    
    );
  }
}

export default UseForm;