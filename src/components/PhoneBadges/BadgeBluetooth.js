import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeBluetooth extends Component {

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      if (!value.includes('No')) {
        return <label className="Badge">Bluetooth</label>;
      }
    }
    return <span> </span>;
  }
}

export default BadgeBluetooth;