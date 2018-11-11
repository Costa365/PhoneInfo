import React, { Component } from 'react';

class PhonePanel extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><b><i>CPU</i></b>: {this.props.phoneDetails['cpu']}</li>
          <li><b><i>Chipset</i></b>: {this.props.phoneDetails['chipset']}</li>
          <li><b><i>OS</i></b>: {this.props.phoneDetails['os']}</li>
          <li><b><i>Bluetooth</i></b>: {this.props.phoneDetails['bluetooth']}</li>
          <li><b><i>Wi-Fi</i></b>: {this.props.phoneDetails['wlan']}</li>
          <li><b><i>SIM</i></b>: {this.props.phoneDetails['sim']}</li>
          <li><b><i>Size</i></b>: {this.props.phoneDetails['size']}</li>
          <li><b><i>Resolution</i></b>: {this.props.phoneDetails['resolution']}</li>
          <li><b><i>Screen</i></b>: {this.props.phoneDetails['type']}</li>
          <li><b><i>GPS</i></b>: {this.props.phoneDetails['gps']}</li>
          <li><b><i>Radio</i></b>: {this.props.phoneDetails['radio']}</li>
          <li><b><i>USB</i></b>: {this.props.phoneDetails['usb']}</li>
          <li><b><i>Internal Memory</i></b>: {this.props.phoneDetails['internal']}</li>
          <li><b><i>Announced</i></b>: {this.props.phoneDetails['announced']}</li>
          <li><b><i>Status</i></b>: {this.props.phoneDetails['status']}</li>
        </ul>
      </div>
    );
  }
}

export default PhonePanel;