import React, { Component } from 'react';
//import EmployeeService from '../services/EmployeeService';
import loginService from '../services/LoginService';
import EditProfileService from '../services/EditProfileService';

class UpdateAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      password: '',
    };
  }

  componentDidMount() {
    loginService.getAdmin(this.state.id).then((res) => {
      let admin = res.data;
      this.setState({ password: admin.password });
    });
  }

  updateAdmin = (e) => {
    e.preventDefault();
    let admin1 = { password: this.state.password };

    EditProfileService.updateAdmin(admin1, this.state.id).then((res) => {
      this.props.history.push(`/mainpage-admin/${this.state.id}`);
    });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  cancel() {
    this.props.history.push(`/mainpage-admin/${this.state.id}`);
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
                <form>
                  <div className="form-group">
                    <label className="font-weight-bold"> Password: </label>
                    <input placeholder="Password" name="password" className="form-control" value={this.state.password} onChange={this.changePasswordHandler} />
                  </div>

                  <button className="btn btn-outline-success" onClick={this.updateAdmin}>
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

export default UpdateAdmin;
