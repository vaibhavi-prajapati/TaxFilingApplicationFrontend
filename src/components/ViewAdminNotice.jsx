import React, { Component } from 'react';
import ViewNoticeService from '../services/ViewNoticeService';
class ViewAdminNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_n: this.props.match.params.id,

      notice: [],
    };
  }
  componentDidMount() {
    ViewNoticeService.getAdminNotice(this.state.email_n).then((res) => {
      this.setState({ notice: res.data });
    });
  }
  back = (e) => {
    this.props.history.push(`/mainpage-admin/${this.state.email_n}`);
  };
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Your All Notices</h2>

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

export default ViewAdminNotice;
