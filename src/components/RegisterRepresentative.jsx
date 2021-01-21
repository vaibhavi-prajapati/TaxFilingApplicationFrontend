import React, { Component } from 'react';

import RegistrationService from '../services/RegistrationService';
class RegisterRepresentative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representative: [],

      name: '',
      email: '',
      password: '',

      securityQuestion: 'What is your nickname?',
      securityAnswer: '',
      contactNo: '',
    };
  }

  componentDidMount() {}

  getTitle() {
    return 'Representative registration form';
  }

  saveOrUpdateEmployee = (event) => {
    event.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,

      securityQuestion: this.state.securityQuestion,
      securityAnswer: this.state.securityAnswer,
      contactNo: this.state.contactNo,
    };

    RegistrationService.createRepresentative(data).then((res) => {
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

  changeemailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changePassHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeQuestionHandler = (event) => {
    this.setState({ securityQuestion: event.target.value });
  };
  changeAnsHandler = (event) => {
    this.setState({ securityAnswer: event.target.value });
  };
  changeContHandler = (event) => {
    this.setState({ contactNo: event.target.value });
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div style={{ backgroundColor: '#F2FEFF' }} className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form onSubmit={this.saveOrUpdateEmployee}>
                  <div className="form-group">
                    <label> Name: </label>
                    <input placeholder="name" name="name" className="form-control" type="text" pattern="[A-Za-z ]{2,30}" title="Must contain only characters and size should be between 2 to 30" value={this.state.name} onChange={this.changeNameHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input placeholder="email" name="email" className="form-control" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must be in format abc@gmail.com" value={this.state.email} onChange={this.changeemailHandler} required />
                  </div>
                  <div className="form-group">
                    <label> Password: </label>
                    <input placeholder="Password" name="password" className="form-control" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" value={this.state.password} onChange={this.changePassHandler} required />
                  </div>

                  <div class="form-group">
                    <label for="sel1">Select list (select one):</label>
                    <select class="form-control" id="sel1" name="securityQuestion" value={this.state.securityQuestion} onChange={this.changeQuestionHandler} required>
                      <option>What is your nickname?</option>
                      <option>What is your pet name?</option>
                      <option>What is your bestfriend name?</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label> SecurityAnswer: </label>
                    <input placeholder="securityAnswer" name="securityAnswer" className="form-control" type="text" value={this.state.securityAnswer} onChange={this.changeAnsHandler} required />
                  </div>
                  <div className="form-group">
                    <label> ContactNo: </label>
                    <input placeholder="contact Number" name="contactNo" className="form-control" type="text" pattern="(^$|[0-9]{10})" title="contact no should be of 10 digits" value={this.state.contactNo} onChange={this.changeContHandler} required />
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
export default RegisterRepresentative;
