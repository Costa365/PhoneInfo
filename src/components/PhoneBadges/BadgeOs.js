import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeOs extends Component {

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      if (value.includes('Android')) {
        return <label className="Badge Android">Android</label>;
      }
      else if (value.includes('iOS')) {
        return <label className="Badge Apple">iOS</label>;
      }
      else if (value.includes('BlackBerry')) {
        return <label className="Badge Blackberry">BlackBerry</label>;
      }
      else if (value.includes('Microsoft Windows Phone')) {
        return <label className="Badge Microsoft">Windows Phone</label>;
      }
      else if (value.includes('Tizen')) {
        return <label className="Badge">Tizen</label>;
      }
      else if (value.includes('Symbian')) {
        return <label className="Badge">Symbian</label>;
      }
      else if (value.includes('Bada')) {
        return <label className="Badge">Bada</label>;
      }
    }
    return <span> </span>;
  }
}

export default BadgeOs;