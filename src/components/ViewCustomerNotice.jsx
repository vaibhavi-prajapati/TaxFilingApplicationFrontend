import React, { Component } from 'react';
import ViewNoticeService from '../services/ViewNoticeService';
class ViewCustomerNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer_id: this.props.match.params.id,
      notice: [],
    };
  }
  componentDidMount() {
    ViewNoticeService.getCustomerNotice(this.state.customer_id).then((res) => {
      this.setState({ notice: res.data });
    });
  }

  back = (e) => {
    this.props.history.push(`/mainpage-customer/${this.state.customer_id}`);
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
              <div className="text-center">
                <button className="btn btn-outline-info" onClick={this.back}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCustomerNotice;
