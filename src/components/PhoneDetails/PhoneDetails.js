import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PhoneBadges from '../PhoneBadges/PhoneBadges';
import PhonePanel from './PhonePanel';

class PhoneDetails extends Component {

  render() {

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
        width: 750,
        Cell: row => (
          <div><PhoneBadges phoneDetails={row.original}/></div>
        )
      }]

      return (
        <div>
        <p></p>
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
        <p></p>
        </div>
      );
    }
  }
}

export default PhoneDetails;