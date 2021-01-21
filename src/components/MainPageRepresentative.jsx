import React, { Component } from 'react';
import ViewProfileService from '../services/ViewProfileService';

class MainPageRepresentative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      representative: '',
    };
  }

  componentDidMount() {
    ViewProfileService.getRepresentative(this.state.id).then((res) => {
      this.setState({ representative: res.data });
    });
  }

  viewNotice = (e) => {
    this.props.history.push(`/viewRepresentativeNotice/${this.state.id}`);
  };

  update = () => {
    this.props.history.push(`/updateRepresentative/${this.state.id}`);
  };

  logout = (e) => {
    this.props.history.push('/login');
  };

  getTaxforms = () => {
    this.props.history.push(`/getTaxFormsForRepresentative/${this.state.id}`);
  };

  viewRepresentativeProfile = (e) => {
    this.props.history.push(`/viewRepresentativeProfile/${this.state.id}`);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Welcome {this.state.representative.name}, what do you want to do next?</h2>
        <div className="text-right">
          <button className="btn btn-outline-danger" onClick={this.logout}>
            Logout
          </button>
        </div>
        <div className="text-center">
          <div style={{ border: 'none' }} className="card col-md-8 offset-md-2 table-borderless">
            <button className="btn btn-outline-primary mr-5" onClick={this.viewRepresentativeProfile}>
              View my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.update}>
              Update my Profile
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.getTaxforms}>
              Verify Customer Taxforms
            </button>
            <br></br>
            <button className="btn btn-outline-primary mr-5" onClick={this.viewNotice}>
              View my sent Notices
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPageRepresentative;
