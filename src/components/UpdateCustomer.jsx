import React, { Component } from 'react';
import EditProfileService from '../services/EditProfileService';
import ViewProfileService from '../services/ViewProfileService';

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      name: '',
      email: '',
      password: '',
      contactNo: '',
      accountNo: '',
      maritalStatus: '',
      address: '',
    };
  }

  componentDidMount() {
    ViewProfileService.getCustomer(this.state.id).then((res) => {
      let customer = res.data;
      this.setState({ name: customer.name, email: customer.email, password: customer.password, contactNo: customer.contactNo, accountNo: customer.accountNo, maritalStatus: customer.maritalStatus, address: customer.address });
    });
  }

  updateCustomer = (e) => {
    e.preventDefault();

    let cust = { name: this.state.name, email: this.state.email, password: this.state.password, contactNo: this.state.contactNo, accountNo: this.state.accountNo, maritalStatus: this.state.maritalStatus, address: this.state.address };

    EditProfileService.updateCustomer(cust, this.state.id).then((res) => {
      this.props.history.push(`/mainpage-customer/${this.state.id}`);
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeContactNoHandler = (event) => {
    this.setState({ contactNo: event.target.value });
  };

  changeAccountNoHandler = (event) => {
    this.setState({ accountNo: event.target.value });
  };

  changeMaritalStatusHandler = (event) => {
    this.setState({ maritalStatus: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push(`/mainpage-customer/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Profile</h3>
              <div className="card-body">
                <form onSubmit={this.updateCustomer}>
                  <div className="form-group">
                    <label className="font-weight-bold"> Name: </label>
                    <input placeholder="Name" type="text" name="name" className="form-control" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" value={this.state.name} onChange={this.changeNameHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Email: </label>
                    <input placeholder="Email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input placeholder="Password" name="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" value={this.state.password} onChange={this.changePasswordHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Contact Number: </label>
                    <input placeholder="Contact Number" type="text" name="contactNo" className="form-control" pattern="(^$|[0-9]{10})" title="contact no should be of 10 digits" value={this.state.contactNo} onChange={this.changeContactNoHandler} required />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold"> Account Number: </label>
                    <input placeholder="Account Number" name="accountNo" className="form-control" pattern="(^$|[0-9]{12})" title="account no should be 12 digits" value={this.state.accountNo} onChange={this.changeAccountNoHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Marital Status: </label>
                    <input placeholder="Marital Status" name="maritalStatus" className="form-control" value={this.state.maritalStatus} onChange={this.changemaritalStatusHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Address: </label>
                    <input placeholder="Address" name="address" className="form-control" pattern="[a-zA-Z0-9 ,.-]{2,50}$" title="enter proper address" value={this.state.address} onChange={this.changeAddressHandler} required />
                  </div>

                  <button className="btn btn-outline-success" type="submit">
                    Update
                  </button>
                  <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateCustomer;
