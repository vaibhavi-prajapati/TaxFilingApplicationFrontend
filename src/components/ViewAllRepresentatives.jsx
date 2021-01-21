import React, { Component } from 'react';
import EditProfileService from '../services/EditProfileService';
import ViewProfileService from '../services/ViewProfileService';

class ViewAllRepresentatives extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      representatives: [],
    };
  }

  deleteRepresentative(representativeId) {
    EditProfileService.deleteActor(3, representativeId).then((res) => {
      this.setState({ representatives: this.state.representatives.filter((representative) => representative.representativeId !== representativeId) });
    });
  }
  componentDidMount() {
    ViewProfileService.getAllRepresentatives().then((res) => {
      this.setState({ representatives: res.data });
    });
  }

  cancel() {
    this.props.history.push(`/manageActors/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">All Representatives</h2>

        <br></br>
        <div className="row">
          <table className="table table-hover table table-bordered">
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Email</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.representatives.map((representative) => (
                <tr key={representative.representativeId}>
                  <td> {representative.representativeId} </td>
                  <td> {representative.name} </td>
                  <td> {representative.email}</td>
                  <td>
                    <button style={{ marginLeft: '10px' }} onClick={() => this.deleteRepresentative(representative.representativeId)} className="btn btn-outline-danger">
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

export default ViewAllRepresentatives;
