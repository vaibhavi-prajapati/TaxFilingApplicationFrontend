import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';

class ViewTaxFormByCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: this.props.match.params.customerId,
      taxform: '',
      hasError: false,
    };
  }

  componentDidMount() {
    fileReturnService
      .getTaxFormForCustomer(this.state.customerId)
      .then((res) => {
        this.setState({ taxform: res.data });
      })
      .catch((err) => {
        this.setState({ hasError: true });
      });
  }

  fileReturn = () => {
    this.props.history.push(`/fileReturn/${this.state.customerId}`);
  };

  cancel = () => {
    this.props.history.push(`/mainpage-customer/${this.state.customerId}`);
  };

  render() {
    return (
      <div className="">
        {this.state.hasError && (
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> Add Tax details first!</th>
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
            <h2 className="offset-md-4">Taxform details</h2>
            <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-5 mx-auto mb-2">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th> Taxform Id </th>
                    <td> {this.state.taxform.taxformId} </td>
                  </tr>
                  <tr>
                    <th> PAN </th>
                    <td> {this.state.taxform.pan} </td>
                  </tr>
                  <tr>
                    <th> Income Salary</th>
                    <td> {this.state.taxform.totalIncomeSalary} </td>
                  </tr>
                  <tr>
                    <th> Exemptions and Deductions</th>
                    <td> {this.state.taxform.hra}</td>
                  </tr>
                  <tr>
                    <th> Income form other sources</th>
                    <td> {this.state.taxform.otherIncome}</td>
                  </tr>
                  <tr>
                    <th> Income from interest</th>
                    <td> {this.state.taxform.interestIncome}</td>
                  </tr>

                  <tr>
                    <th> Income from renting</th>
                    <td> {this.state.taxform.rentalIncome}</td>
                  </tr>
                  <tr>
                    <th> Basic Deductions-80C</th>
                    <td> {this.state.taxform.ppf}</td>
                  </tr>
                  <tr>
                    <th> Medical Insurance-80D</th>
                    <td> {this.state.taxform.medicalInsurance}</td>
                  </tr>
                  <tr>
                    <th> Interest on Education Loan-80E</th>
                    <td> {this.state.taxform.educationLoan}</td>
                  </tr>
                  <tr>
                    <th> Interest on Housing Loan-80EEA</th>
                    <td> {this.state.taxform.houseLoan}</td>
                  </tr>
                  <tr>
                    <th> Interest from Deposits-80TTA:</th>
                    <td> {this.state.taxform.savingsInterest} </td>
                  </tr>
                  <tr>
                    <th> Contribution to NPS-80CCD</th>
                    <td> {this.state.taxform.nps}</td>
                  </tr>
                  <tr>
                    <th> Payable Tax</th>
                    <td> {this.state.taxform.payableTax}</td>
                  </tr>
                  <tr>
                    <th> Tax Deducted at Source</th>
                    <td> {this.state.taxform.tds}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="text-center">
              <button onClick={() => this.fileReturn()} className="btn btn-success mr-5">
                File return
              </button>
              <button className="btn btn-primary" onClick={this.cancel}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ViewTaxFormByCustomer;
