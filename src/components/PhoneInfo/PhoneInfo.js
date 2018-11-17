import React, { Component } from 'react';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

class PhoneInfo extends Component {

  className = 'PhoneInfo'

  constructor(props) {
    super(props);
    
    this.state = {
        phoneName: '', 
        phoneInfos: [],
        loading: false};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({phoneName: event.target.value});
  }

  handleSubmit(event) {
    this.setState({loading:true});
    let url = 'https://fonoapi.freshpixl.com/v1/getdevice?device=' + this.state.phoneName + '&token=' + process.env.REACT_APP_FONO_API_KEY;
    fetch(url)
    .then(d => d.json())
    .then(d => this.setState({phoneInfos: d}))
    .then(d => this.setState({loading:false}))
    .catch(function(error) {  
      console.log('Request failed', error);
    });

    event.preventDefault();
  }

  render() {

    let phoneDetails = this.state.loading ? <p>Querying...</p> : <PhoneDetails phoneDetails={this.state.phoneInfos}/>;

    return (
      <div className="PhoneInfo">
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Phone:
            <input type="text" value={this.state.phoneName} onChange={this.handleChangeName} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {phoneDetails}
      </div>
    );
  }
}

export default PhoneInfo;