import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeSim extends Component {

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      if(value.includes('Dual')){
        return <label className="Badge Sim">Dual SIM</label>;
      }
    }
    return <span></span>
  }
}

export default BadgeSim;