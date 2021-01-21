import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';
//import BootstrapTable from 'react-bootstrap-table-next';

class ViewTaxFormByAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taxformId: this.props.match.params.taxformId,
      taxform: '',
    };
  }

  componentDidMount() {
    fileReturnService.viewTaxForm(this.state.taxformId).then((res) => {
      this.setState({ taxform: res.data });
    });
  }

  approve = (taxformId) => {
    this.props.history.push(`/verifyTaxformByAdmin/${taxformId}/${1}`);
  };

  reject = (taxformId) => {
    this.props.history.push(`/verifyTaxformByAdmin/${taxformId}/${2}`);
  };

  cancel = () => {
    this.props.history.push('/getTaxFormsForAdmin');
  };

  render() {
    return (
      <div className="">
        <h2 className="offset-md-4">Taxform details</h2>
        <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-5 offset-md-3  mb-2">
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
          <button onClick={() => this.approve(this.state.taxform.taxformId)} className="btn btn-success mr-5">
            Approve
          </button>
          <button onClick={() => this.reject(this.state.taxform.taxformId)} className="btn btn-danger mr-5">
            Reject
          </button>
          <button className="btn btn-primary" onClick={this.cancel}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default ViewTaxFormByAdmin;
