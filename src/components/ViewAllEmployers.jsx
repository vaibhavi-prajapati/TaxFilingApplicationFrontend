import React, { Component } from 'react';
import EditProfileService from '../services/EditProfileService';
import ViewProfileService from '../services/ViewProfileService';

class ViewAllEmployers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      employers: [],
    };
  }

  deleteEmployer(employerId) {
    EditProfileService.deleteActor(2, employerId).then((res) => {
      this.setState({ employers: this.state.employers.filter((employer) => employer.employerId !== employerId) });
    });
  }
  componentDidMount() {
    ViewProfileService.getAllEmployers().then((res) => {
      this.setState({ employers: res.data });
    });
  }

  cancel() {
    this.props.history.push(`/manageActors/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">All Employers</h2>

        <br></br>
        <div className="row">
          <table className="table table-hover table table-bordered">
            <thead>
              <tr>
                <th> ID</th>
                <th> Organization</th>
                <th> Email</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employers.map((employer) => (
                <tr key={employer.employerId}>
                  <td> {employer.employerId} </td>
                  <td> {employer.organization} </td>
                  <td> {employer.email}</td>
                  <td>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.deleteEmployer(employer.employerId)} className="btn btn-outline-danger">
                      Delete{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default ViewAllEmployers;
