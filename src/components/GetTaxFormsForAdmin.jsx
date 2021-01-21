import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';

class GetTaxFormsForAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxforms: [],
      hasError: false,
    };
  }

  componentDidMount() {
    fileReturnService
      .getTaxFormsForAdmin()
      .then((res) => {
        if (res.data == '') {
          this.setState({ hasError: true });
        }
        this.setState({ taxforms: res.data });
      })
      .catch((err) => {
        this.setState({ hasError: true });
      });
  }

  viewTaxForm = (taxformId) => {
    this.props.history.push(`/viewTaxFormByAdmin/${taxformId}`);
  };

  cancel = () => {
    this.props.history.push(`/mainpage-admin/admin`);
  };

  render() {
    return (
      <div>
        {this.state.hasError && (
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> No tax forms to approve</th>
                </tr>
              </thead>
            </table>
            <button className="btn btn-primary" onClick={this.cancel} style={{ marginLeft: '10px' }}>
              Back
            </button>
          </div>
        )}
        {!this.state.hasError && (
          <div>
            <h2 className="text-center">All Taxforms</h2>
            <br></br>
            <div className="row">
              <table className="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th> Taxform Id</th>
                    <th> PAN</th>
                    <th> Total Income Salary</th>
                    <th> Payable Tax</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.taxforms.map((taxform) => (
                    <tr key={taxform.taxformId}>
                      <td> {taxform.taxformId}</td>
                      <td> {taxform.pan}</td>
                      <td> {taxform.totalIncomeSalary} </td>
                      <td> {taxform.payableTax}</td>
                      <td>
                        <button onClick={() => this.viewTaxForm(taxform.taxformId)} className="btn btn-info">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="btn btn-primary" onClick={this.cancel}>
              Back
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default GetTaxFormsForAdmin;
