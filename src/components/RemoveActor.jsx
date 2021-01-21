import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RemoveActor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
      employers: [],
      representatives: [],
      choice: '',
    };
  }

  remove(e) {
    this.props.history.push('/viewAllCustomers');
  }
  componentDidMount() {}

  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2>Remove Actor</h2>
              <hr></hr>
              <div className="card-body">
                <form name="form">
                  <div className="form-group">
                    <label>View All:&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="users" value={this.state.choice} onChange={this.changeChoiceHandler}>
                      <option value="customer">Customer</option>
                      <option value="employer">Employer</option>
                      <option value="representative">Representative</option>
                    </select>
                  </div>

                  <button className="btn btn-primary" onClick={this.remove}>
                    View
                  </button>
                  <p>{this.state.choice}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RemoveActor;
