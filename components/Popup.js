import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Popup.css';
class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h3>{this.props.text}</h3>
        <button onClick={this.props.closePopup}>close</button>
        </div>
      </div>
    );
  }
}
export default Popup;