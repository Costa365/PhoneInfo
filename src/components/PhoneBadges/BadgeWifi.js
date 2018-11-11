import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeWifi extends Component {

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      if (!value.includes('No')) {
        return <label className="Badge Wifi">Wi-Fi</label>;
      }
    }
    return <span> </span>;
  }
}

export default BadgeWifi;