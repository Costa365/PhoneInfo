import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PhoneBadges from '../PhoneBadges/PhoneBadges';
import PhonePanel from './PhonePanel';

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
        accessor: 'DeviceName',
        width: 250
      }, {
        Header: 'Technology',
        accessor: 'technology',
        Cell: row => (
          <div><PhoneBadges phoneDetails={row.original}/></div>
        )
      }]

      return (
        <div>
        <ReactTable
          data={this.props.phoneDetails}
          columns={columns}
          defaultPageSize={10}
          SubComponent={row => {
            return (
              <PhonePanel phoneDetails={row.original}/>
            );
          }}
        />
        </div>
      );
    }
  }
}

export default PhoneDetails;