import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class PhoneDetails extends Component {

  className = 'PhoneDetails';
  
  componentWillMount(){
    console.log(this.className + ' - componentWillMount');
  }
  
  componentDidMount(){
    console.log(this.className + ' - componentDidMount');
  }
  
  componentWillReceiveProps(){
    console.log(this.className + ' - componentWillReceiveProps');
  }
  
  componentWillUpdate(){
    console.log(this.className + ' - componentWillUpdate');
  }
  
  componentDidUpdate(){
    console.log(this.className + ' - componentDidUpdate');
  }
  
  componentWillUnmount(){
    console.log(this.className + ' - componentWillUnmount');
  }


  render() {
    console.log(this.className + ' - render');

    if(this.props.phoneDetails.length === undefined){
      return <p>Unknown</p>   
    }
    else if(this.props.phoneDetails.length < 1){
      return <p> </p>   
    }
    else {

      const columns = [{
        Header: 'Device Name',
        accessor: 'DeviceName'
      }, {
        Header: 'Technology',
        accessor: 'technology'
      }, {
        Header: 'SIM',
        accessor: 'sim'
      }, {
        Header: 'WiFi',
        accessor: 'wlan'
      }, {
        Header: 'Bluetooth',
        accessor: 'bluetooth'
      }, {
        Header: 'Announced',
        accessor: 'announced'
      }, {
        Header: 'Status',
        accessor: 'status'
      }, {
        Header: 'OS',
        accessor: 'os'
      }]

      return (
        <div>
        <p />
        <ReactTable
          data={this.props.phoneDetails}
          columns={columns}
        />
        <p />
        </div>
      );
    }
  }
}

export default PhoneDetails;