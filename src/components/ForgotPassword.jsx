import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EditProfileService from '../services/EditProfileService';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      password: '',
      answer: '',
      queChoice: '1',
      userChoice: '1',
      forgotRes: '',
    };

    this.reset = this.reset.bind(this);
  }

  reset(e) {
    e.preventDefault();
    EditProfileService.forgotPassword(this.state.id, this.state.userChoice, this.state.queChoice, this.state.answer, this.state.password).then((res) => {
      this.setState({ forgotRes: res.data });
      if (this.state.forgotRes === 'Password resetted succesfully') {
        alert(this.state.forgotRes + '!!  Please login');
        this.props.history.push('/login');
      } else {
        alert(this.state.forgotRes + '  Please try again');
        window.location.reload();
      }
    });
  }

  componentDidMount() {}

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changeUserChoiceHandler = (event) => {
    this.setState({ userChoice: event.target.value });
  };

  changeQueChoiceHandler = (event) => {
    this.setState({ queChoice: event.target.value });
  };

  changeAnswerHandler = (event) => {
    this.setState({ answer: event.target.value });
  };
  /*changeDepartmentHandler= (event) =>{
        this.setState({department: event.target.value});
    }
        */

  cancel() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div style={{ backgroundColor: '#F2FEFF' }} className=" card col-md-6 offset-md-3 offset-md-3 p-3 mb-2 text-dark">
              <h2 className="text-center">Forgot Password</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form" onSubmit={this.reset}>
                  <div className="form-group">
                    <label className="font-weight-bold">User type&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="userChoice" value={this.state.userChoice} onChange={this.changeUserChoiceHandler}>
                      <option value="1">Customer</option>
                      <option value="2">Employer</option>
                      <option value="3">Representative</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">Id</label>
                    <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.changeIdHandler} required />
                  </div>

                  <br></br>

                  <div className="form-group">
                    <label className="font-weight-bold">Question Choice&nbsp;&nbsp;&nbsp;</label>
                    <select id="queChoice" name="queChoice" value={this.state.queChoice} onChange={this.changeQueChoiceHandler}>
                      <option value="1">What is your nickname?</option>
                      <option value="2">What is your pet name?</option>
                      <option value="3">What is your bestfriend name?</option>
                    </select>
                  </div>

                  <br></br>

                  <div className="form-group">
                    <label className="font-weight-bold">Answer for above Question</label>
                    <input type="text" className="form-control" name="answer" value={this.state.answer} onChange={this.changeAnswerHandler} required />
                  </div>

                  <div className="form-group">
                    <label className="font-weight-bold">New Password</label>
                    <input type="password" className="form-control" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter and at least 8 or more characters" value={this.state.password} onChange={this.changePasswordHandler} required />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-outline-primary" type="submit">
                      Reset
                    </button>

                    <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
