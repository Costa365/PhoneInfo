import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeNfc extends Component {

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      if(value.includes('Yes')){
        return <label className="Badge Nfc">NFC</label>;
      }
    }
    return <span></span>
  }
}

export default BadgeNfc;