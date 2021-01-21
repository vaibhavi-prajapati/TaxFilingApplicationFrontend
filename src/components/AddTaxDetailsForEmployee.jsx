import React, { Component } from 'react';
import AddTaxDetailsService from '../services/AddTaxDetailsService';

class AddTaxDetailsForEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employerId: this.props.match.params.employerId,
    };
    this.changeextraInfoHandler = this.changeextraInfoHandler.bind(this);
    this.changetotalIncomeHandler = this.changetotalIncomeHandler.bind(this);
    this.changehraHandler = this.changehraHandler.bind(this);
    this.changeotherIncomeHandler = this.changeotherIncomeHandler.bind(this);
    this.changeinterestIncomeHandler = this.changeinterestIncomeHandler.bind(this);
    this.changerentalIncomeHandler = this.changerentalIncomeHandler.bind(this);
    this.changeppfHandler = this.changeppfHandler.bind(this);
    this.changemedicalInsuranceHandler = this.changemedicalInsuranceHandler.bind(this);
    this.changeeducationLoanHandler = this.changeeducationLoanHandler.bind(this);
    this.changehouseLoanHandler = this.changehouseLoanHandler.bind(this);
    this.changenpsHandler = this.changenpsHandler.bind(this);
    this.changesavingsInterestHandler = this.changesavingsInterestHandler.bind(this);
  }

  changeextraInfoHandler = (event) => {
    this.setState({ extraInfo: event.target.value });
  };

  changetotalIncomeHandler = (event) => {
    this.setState({ totalIncome: event.target.value });
  };

  changehraHandler = (event) => {
    this.setState({ hra: event.target.value });
  };

  changeotherIncomeHandler = (event) => {
    this.setState({ otherIncome: event.target.value });
  };

  changeinterestIncomeHandler = (event) => {
    this.setState({ interestIncome: event.target.value });
  };

  changerentalIncomeHandler = (event) => {
    this.setState({ rentalIncome: event.target.value });
  };

  changeppfHandler = (event) => {
    this.setState({ ppf: event.target.value });
  };

  changemedicalInsuranceHandler = (event) => {
    this.setState({ medicalInsurance: event.target.value });
  };

  changeeducationLoanHandler = (event) => {
    this.setState({ educationLoan: event.target.value });
  };

  changehouseLoanHandler = (event) => {
    this.setState({ houseLoan: event.target.value });
  };

  changenpsHandler = (event) => {
    this.setState({ nps: event.target.value });
  };

  changesavingsInterestHandler = (event) => {
    this.setState({ savingsInterest: event.target.value });
  };

  componentDidMount() {
    AddTaxDetailsService.getCustomerById(this.state.id).then((res) => {
      let customer = res.data;
      this.setState({ pan: customer.pan, extraInfo: customer.dateOfBirth });
      console.log(JSON.stringify(res.data));
    });
  }

  saveTaxDetails = (e) => {
    e.preventDefault();
    let objTaxForm = {
      pan: this.state.pan,
      extraInfo: this.state.extraInfo,
      totalIncomeSalary: this.state.totalIncome,
      hra: this.state.hra,
      otherIncome: this.state.otherIncome,
      interestIncome: this.state.interestIncome,
      rentalIncome: this.state.rentalIncome,
      ppf: this.state.ppf,
      medicalInsurance: this.state.medicalInsurance,
      educationLoan: this.state.educationLoan,
      houseLoan: this.state.houseLoan,
      nps: this.state.houseLoan,
      savingsInterest: this.state.savingsInterest,
    };
    //console.log(JSON.stringify(objTaxForm));
    AddTaxDetailsService.addTaxDetailsForEmployee(objTaxForm).then((res) => {
      alert('Tax details added successfully');
      this.props.history.push(`/mainpage-employer/${this.state.employerId}`);
    });
  };

  cancel() {
    this.props.history.push(`/ViewEmpForEmployer/${this.state.employerId}`);
  }

  getTitle() {
    return <h3 className="text-center">Adding Tax Details for Employee</h3>;
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form onSubmit={this.saveTaxDetails}>
                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="PAN card number">
                      <b>Your PAN:</b>
                    </label>
                    <input placeholder="" name="pan" className="form-control" value={this.state.pan} />
                  </div>

                  <font color="green">
                    <h4>Income Details</h4>
                  </font>
                  <br></br>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Income from main sources/Salary before reducing HRA and LTA">
                      <b>Income</b>
                    </label>
                    <input placeholder="" name="totalIncome" className="form-control" value={this.state.totalIncome} onChange={this.changetotalIncomeHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="House Rent Allowance and LTA">
                      <b>Exemptions and Deductions</b>
                    </label>
                    <input placeholder="" name="hra" className="form-control" value={this.state.hra} onChange={this.changehraHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Income from other sources(freelancing income and other taxable professions)">
                      <b>Other Income</b>
                    </label>
                    <input placeholder="" name="otherIncome" className="form-control" value={this.state.otherIncome} onChange={this.changeotherIncomeHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Includes income from savings in bank, deposits and other interest">
                      <b>Income from Interest</b>
                    </label>
                    <input placeholder="" name="interestIncome" className="form-control" value={this.state.interestIncome} onChange={this.changeinterestIncomeHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Annual Income received on let-out property">
                      <b>Rental Income</b>
                    </label>
                    <input placeholder="" name="rentalIncome" className="form-control" value={this.state.rentalIncome} onChange={this.changerentalIncomeHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>
                  <font color="red">
                    <h4>Deductions</h4>
                  </font>
                  <br></br>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Amount invested in PPF, ELSS, LIC Premium, etc.">
                      <b>Basic Deductions-80C</b>
                    </label>
                    <input placeholder="" name="ppf" className="form-control" value={this.state.ppf} onChange={this.changeppfHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Medical Premium and Health Checkup fees paid for self and family including parents">
                      <b>Medical Insurance-80D</b>
                    </label>
                    <input placeholder="" name="medicalInsurance" className="form-control" value={this.state.medicalInsurance} onChange={this.changemedicalInsuranceHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Amount of interest paid on loan taken for higher education">
                      <b>Interest on Education Loan-80E</b>
                    </label>
                    <input placeholder="" name="educationLoan" className="form-control" value={this.state.educationLoan} onChange={this.changeeducationLoanHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Amount of interest paid on housing loan">
                      <b>Interest on Housing Loan-80EEA</b>
                    </label>
                    <input placeholder="" name="houseLoan" className="form-control" value={this.state.houseLoan} onChange={this.changehouseLoanHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Includes voluntary contribution to National Pension Scheme">
                      <b>Contribution to NPS-80CCD</b>
                    </label>
                    <input placeholder="" name="nps" className="form-control" value={this.state.nps} onChange={this.changenpsHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <div className="form-group">
                    <label data-toggle="tooltip" data-placement="right" title="Amount of Interest Income on deposits in Savings account">
                      <b>Interest from Deposits-80TTA</b>
                    </label>
                    <input placeholder="" name="savingsInterest" className="form-control" value={this.state.savingsInterest} onChange={this.changesavingsInterestHandler} pattern="(^$|[0-9]{1,})" title="Value should be 0 or greater than 0" required />
                  </div>

                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTaxDetailsForEmployee;
