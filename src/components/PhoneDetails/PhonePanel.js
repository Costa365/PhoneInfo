import React, { Component } from 'react';

class PhonePanel extends Component {
  render() {
    return (
      <table>
        <ul>
          <tr><th>CPU</th><td>{this.props.phoneDetails['cpu']}</td></tr>
          <tr><th>Chipset</th><td>{this.props.phoneDetails['chipset']}</td></tr>
          <tr><th>OS</th><td>{this.props.phoneDetails['os']}</td></tr>
          <tr><th>Bluetooth</th><td>{this.props.phoneDetails['bluetooth']}</td></tr>
          <tr><th>Wi-Fi</th><td>{this.props.phoneDetails['wlan']}</td></tr>
          <tr><th>SIM</th><td>{this.props.phoneDetails['sim']}</td></tr>
          <tr><th>Size</th><td>{this.props.phoneDetails['size']}</td></tr>
          <tr><th>Resolution</th><td>{this.props.phoneDetails['resolution']}</td></tr>
          <tr><th>Screen</th><td>{this.props.phoneDetails['type']}</td></tr>
          <tr><th>GPS</th><td>{this.props.phoneDetails['gps']}</td></tr>
          <tr><th>Radio</th><td>{this.props.phoneDetails['radio']}</td></tr>
          <tr><th>USB</th><td>{this.props.phoneDetails['usb']}</td></tr>
          <tr><th>Memory</th><td>{this.props.phoneDetails['internal']}</td></tr>
          <tr><th>Announced</th><td>{this.props.phoneDetails['announced']}</td></tr>
          <tr><th>Status</th><td>{this.props.phoneDetails['status']}</td></tr>
        </ul>
      </table>
    );
  }
}

export default PhonePanel;