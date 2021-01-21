import React, { Component } from 'react';
import ViewNoticeService from '../services/ViewNoticeService';
class ViewRepresentativeNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representative_id: this.props.match.params.id,
      notice: [],
    };
  }
  componentDidMount() {
    ViewNoticeService.getRepresentativeNotice(this.state.representative_id).then((res) => {
      this.setState({ notice: res.data });
    });
  }
  back = (e) => {
    this.props.history.push(`/mainpage-representative/${this.state.representative_id}`);
  };
  render() {
    return (
      <div>
        <div className="card col-md-8 offset-md-2 ">
          <h2 className="text-center">Your sent Notices</h2>

          <br></br>

          <div className="container">
            <div className="row">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th> Notices</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.notice.map((notice) => (
                    <tr key={notice.noticeId}>
                      <td> {notice.customer.customerId} </td>
                      <td> {notice.noticeBody} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-link" onClick={this.back}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRepresentativeNotice;
