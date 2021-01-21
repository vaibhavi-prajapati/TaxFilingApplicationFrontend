import React, { Component } from 'react';
import ViewProfileService from '../services/ViewProfileService';

class MainPageCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      customer: '',
    };
  }
  componentDidMount() {
    ViewProfileService.getCustomer(this.state.id).then((res) => {
      this.setState({ customer: res.data });
    });
  }
  fileReturn = () => {
    this.props.history.push(`/viewTaxformByCustomer/${this.state.id}`);
  };
  viewNotice = (e) => {
    this.props.history.push(`/viewcustomernotice/${this.state.id}`);
  };
  update = (e) => {
    this.props.history.push(`/updateCustomer/${this.state.id}`);
  };
  addTaxDetails = () => {
    this.props.history.push(`/addTaxDetailsByCustomer/${this.state.id}`);
  };

  logout = (e) => {
    this.props.history.push('/login');
  };
  viewCustomerProfile = (e) => {
    this.props.history.push(`/viewCustomerProfile/${this.state.id}`);
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Welcome {this.state.customer.name}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>

        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 mx-auto table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.viewCustomerProfile}>
              View my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Update my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.addTaxDetails}>
              Add Tax details
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.fileReturn}>
              File Return
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              View recieved Notices
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageCustomer;
