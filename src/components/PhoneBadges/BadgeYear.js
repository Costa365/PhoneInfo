import React, { Component } from 'react';
import './PhoneBadges.css';

class BadgeYear extends Component {

  getYear(str){
    var res = str.match(/(20|19)../g);
    if(res){
      return res;
    }
    return '';
  }

  render() {
    if(this.props.value !== undefined){
      const value = this.props.value;
      const year = this.getYear(value);
      if(year !== ''){
        return <label className="Badge Year">{year}</label>;
      }
    }
    return <span></span>
  }
}

export default BadgeYear;