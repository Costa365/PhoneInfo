import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeTechnology extends Component {

  render() {
    if(this.props.value.includes('No cellular')){
      return <span> </span>;
    }
    else
    {
      return (
        <span>
          {this.props.value.includes('GSM') && <label className="Badge Gsm">GSM</label>}
          {this.props.value.includes('HSPA') && <label className="Badge Umts">UMTS</label>}
          {this.props.value.includes('LTE') && <label className="Badge Lte">LTE</label>}
          {this.props.value.includes('CDMA') && <label className="Badge Cmda">CDMA</label>}
          {this.props.value.includes('EVDO') && <label className="Badge Evdo">EVDO</label>}
          {this.props.value.includes('CDMA2000') && <label className="Badge Cdma">CDMA2000</label>}
        </span>
      );
    }
  }
}

export default BadgeTechnology;