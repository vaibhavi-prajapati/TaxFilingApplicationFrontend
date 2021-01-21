import React, { Component } from 'react';
import ViewProfileService from '../services/ViewProfileService';

class MainPageEmployer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      employer: '',
    };
  }

  componentDidMount() {
    ViewProfileService.getEmployer(this.state.id).then((res) => {
      this.setState({ employer: res.data });
    });
  }

  update = (e) => {
    this.props.history.push(`/updateEmployer/${this.state.id}`);
  };

  logout = (e) => {
    this.props.history.push('/login');
  };

  viewEmployerProfile = (e) => {
    this.props.history.push(`/viewEmployerProfile/${this.state.id}`);
  };
  addTaxDetails = () => {
    this.props.history.push(`/viewEmpForEmployer/${this.state.id}/`);
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Welcome {this.state.employer.organization}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 offset-md-2 table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.viewEmployerProfile}>
              View my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Update my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.addTaxDetails}>
              Add tax details for Employee
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageEmployer;
