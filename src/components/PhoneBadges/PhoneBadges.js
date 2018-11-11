import React, { Component } from 'react';
import './PhoneBadges.css';
import BadgeBluetooth from './BadgeBluetooth';
import BadgeOs from './BadgeOs';
import BadgeTechnology from './BadgeTechnology';
import BadgeWifi from './BadgeWifi';
import BadgeYear from './BadgeYear';
import BadgeSim from './BadgeSim';
import BadgeNfc from './BadgeNfc';

class PhoneBadges extends Component {
  render() {
    return (
      <div>
        <BadgeTechnology value={this.props.phoneDetails['technology']} />
        <BadgeOs value={this.props.phoneDetails['os']} />
        <BadgeBluetooth value={this.props.phoneDetails['bluetooth']} />
        <BadgeWifi value={this.props.phoneDetails['wlan']} />
        <BadgeSim value={this.props.phoneDetails['sim']} />
        <BadgeNfc value={this.props.phoneDetails['nfc']} />
        <BadgeYear value={this.props.phoneDetails['announced']} />
      </div>
    );
  }
}

export default PhoneBadges;