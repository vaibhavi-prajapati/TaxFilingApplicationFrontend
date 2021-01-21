import React, { Component } from 'react';
import EditProfileService from '../services/EditProfileService';
import ViewProfileService from '../services/ViewProfileService';

class UpdateRepresentative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      name: '',
      email: '',
      password: '',
      contactNo: '',
    };
  }

  componentDidMount() {
    ViewProfileService.getRepresentative(this.state.id).then((res) => {
      let representative = res.data;
      this.setState({ name: representative.name, email: representative.email, password: representative.password, contactNo: representative.contactNo });
    });
  }

  updateRepresentative = (e) => {
    e.preventDefault();
    let rep = { name: this.state.name, email: this.state.email, password: this.state.password, contactNo: this.state.contactNo };

    EditProfileService.updateRepresentative(rep, this.state.id).then((res) => {
      this.props.history.push(`/mainpage-representative/${this.state.id}`);
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

  cancel() {
    this.props.history.push(`/mainpage-representative/${this.state.id}`);
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
                <form onSubmit={this.updateRepresentative}>
                  <div className="form-group">
                    <label className="font-weight-bold"> Name: </label>
                    <input placeholder="Name" name="name" className="form-control" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" value={this.state.name} onChange={this.changeNameHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Email: </label>
                    <input placeholder="Email" name="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" value={this.state.email} onChange={this.changeEmailHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input placeholder="Password" name="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" value={this.state.password} onChange={this.changePasswordHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold"> Contact Number: </label>
                    <input placeholder="Contact Number" name="contactNo" className="form-control" pattern="(^$|[0-9]{10})" title="contact no should be of 10 digits" value={this.state.contactNo} onChange={this.changeContactNoHandler} required />
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

export default UpdateRepresentative;
