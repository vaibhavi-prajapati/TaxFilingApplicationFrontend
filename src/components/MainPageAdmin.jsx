import React, { Component } from 'react';
import ViewProfileService from '../services/ViewProfileService';

class MainPageAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      admin: '',
    };
  }

  componentDidMount() {
    ViewProfileService.getAdmin(this.state.id).then((res) => {
      this.setState({ admin: res.data });
    });
  }

  update = (e) => {
    this.props.history.push(`/updateAdmin/${this.state.id}`);
  };

  manageActors = (e) => {
    this.props.history.push(`/manageActors/${this.state.id}`);
  };

  logout = (e) => {
    this.props.history.push('/login');
  };

  getTaxforms = () => {
    this.props.history.push('/getTaxFormsForAdmin');
  };

  viewNotice = (e) => {
    this.props.history.push(`/viewadminnotice/${this.state.id}`);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Welcome {this.state.admin.email}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 offset-md-2 table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Update Password
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.getTaxforms}>
              Verify Customer Taxforms
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.manageActors}>
              Manage Users
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              View sent Notices
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageAdmin;
