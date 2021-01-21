import React, { Component } from 'react';
import RegistrationService from '../services/RegistrationService';
class RegisterCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: [],
      name: '',
      email: '',
      password: '',
      pan: '',
      contactNo: '',
      accountNo: '',
      dateOfBirth: '',
      maritalStatus: 'single',
      address: '',
      isEmployee: '',
      securityQuestion: 'What is your nickname?',
      securityAnswer: '',
      organization: 'null',
      show: false,
    };
  }
  componentDidMount() {}
  getTitle() {
    return 'Customer registration form';
  }

  saveOrUpdateEmployee = (event) => {
    event.preventDefault();
    let data = { name: this.state.name, email: this.state.email, password: this.state.password, pan: this.state.pan, contactNo: this.state.contactNo, accountNo: this.state.accountNo, dateOfBirth: this.state.dateOfBirth, maritalStatus: this.state.maritalStatus, isEmployee: this.state.isEmployee, securityQuestion: this.state.securityQuestion, address: this.state.address, securityAnswer: this.state.securityAnswer };
    RegistrationService.createCustomer(data, this.state.organization).then((res) => {
      alert(res.data);
      this.props.history.push('/login');
    });
  };
  cancel = (event) => {
    event.preventDefault();
    this.props.history.push('/login');
  };
  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };
  changeEmHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changePANHandler = (event) => {
    this.setState({ pan: event.target.value });
  };
  changeContactHandler = (event) => {
    this.setState({ contactNo: event.target.value });
  };
  changeAccHandler = (event) => {
    this.setState({ accountNo: event.target.value });
  };
  changeDOBHandler = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  };
  changeMarHandler = (event) => {
    this.setState({ maritalStatus: event.target.value });
  };
  changeAddrHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  changeEmpHandler = (event) => {
    const value = event.target.value;
    if (value == 'true') {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
    this.setState({ isEmployee: value });
  };
  changeQueHandler = (event) => {
    this.setState({ securityQuestion: event.target.value });
  };
  changeAnsHandler = (event) => {
    this.setState({ securityAnswer: event.target.value });
  };
  changeOrgHandler = (event) => {
    this.setState({ organization: event.target.value });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div style={{ backgroundColor: '#F2FEFF' }} className=" card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form onSubmit={this.saveOrUpdateEmployee}>
                  <div className="form-group">
                    <label> Name </label>
                    <input type="text" placeholder="name" name="name" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" className="form-control" value={this.state.customer.name} onChange={this.changeNameHandler} required />
                  </div>

                  <div className="form-group">
                    <label> Email </label>
                    <input type="email" placeholder="email" name="email" className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" value={this.state.customer.email} onChange={this.changeEmHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Password </label>
                    <input type="password" placeholder="password" name="password" className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" value={this.state.customer.password} onChange={this.changePassHandler} required />
                  </div>

                  <div className="form-group">
                    <label> Pan No </label>
                    <input type="text" placeholder="pan" name="pan" className="form-control" pattern="^$|[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Enter valid pan details" value={this.state.customer.pan} onChange={this.changePANHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Contact No </label>
                    <input type="text" placeholder="contactNo" name="contactNo" className="form-control" pattern="(^$|[0-9]{10})" title="contact no should be of 10 digits" value={this.state.customer.contactNo} onChange={this.changeContactHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Account No </label>
                    <input type="text" placeholder="accountNo" name="accountNo" className="form-control" pattern="(^$|[0-9]{12})" title="account no should be 12 digits" value={this.state.customer.accountNo} onChange={this.changeAccHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Date Of Birth </label>
                    <input type="date" placeholder="dateOfBirth" name="dateOfBirth" className="form-control" title="age should be 18 years and above" value={this.state.customer.dateOfBirth} onChange={this.changeDOBHandler} required />
                  </div>
                  <div className="form-group">
                    <label for="sel3"> maritalStatus </label>
                    <select class="form-control" id="sel3" name="maritalStatus" value={this.state.customer.maritalStatus} onChange={this.changeEmpHandler} required>
                      <option>single</option>
                      <option>married</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> Address </label>
                    <input type="text" placeholder="address" name="address" className="form-control" pattern="[a-zA-Z0-9 ,.-]{2,50}$" title="enter proper address" value={this.state.customer.address} onChange={this.changeAddrHandler} required />
                  </div>
                  <div className="form-group">
                    <label>Are you a employee?</label>
                    <br></br>
                    <input type="radio" name="isEmployee" onChange={this.changeEmpHandler} value="true" checked={this.state.isEmployee === 'true'} /> Yes
                    <br></br>
                    <input type="radio" name="isEmployee" onChange={this.changeEmpHandler} value="false" checked={this.state.isEmployee === 'false'} /> No
                  </div>
                  <div style={{ display: this.state.show ? 'block' : 'none' }} className="form-group">
                    <label> Organization </label>
                    <input type="text" placeholder="organization" name="organization" className="form-control" value={this.state.customer.organization} onChange={this.changeOrgHandler} />
                  </div>

                  <div class="form-group">
                    <label for="sel1">Select list (select one):</label>
                    <select class="form-control" id="sel1" name="securityQuestion" value={this.state.customer.securityQuestion} onChange={this.changeQueHandler} required>
                      <option>What is your nickname?</option>
                      <option>What is your pet name?</option>
                      <option>What is your bestfriend name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> security Answer </label>
                    <input type="text" placeholder="securityAnswer" name="securityAnswer" className="form-control" value={this.state.customer.securityAnswer} onChange={this.changeAnsHandler} required />
                  </div>

                  <button className="btn btn-success" type="submit" style={{ marginLeft: '10px' }}>
                    Register
                  </button>
                  <button className="btn btn-danger" type="button" style={{ marginLeft: '10px' }} onClick={this.cancel}>
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

export default RegisterCustomer;
