import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RemoveActor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id1,
      choice: 'customer',
    };
  }

  viewActors = (e) => {
    e.preventDefault();

    if (this.state.choice === 'customer') {
      this.props.history.push(`/viewAllCustomers/${this.state.id}`);
    }

    if (this.state.choice === 'employer') {
      this.props.history.push(`/viewAllemployers/${this.state.id}`);
    }

    if (this.state.choice === 'representative') {
      this.props.history.push(`/viewAllrepresentatives/${this.state.id}`);
    }
  };

  componentDidMount() {}

  changeChoiceHandler = (event) => {
    this.setState({ choice: event.target.value });
  };

  cancel() {
    this.props.history.push(`/mainpage-admin/${this.state.id}`);
  }

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
                    <label className="font-weight-bold">View All:&nbsp;&nbsp;&nbsp;</label>
                    <select id="users" name="users" value={this.state.choice} onChange={this.changeChoiceHandler}>
                      <option value="customer">Customer</option>
                      <option value="employer">Employer</option>
                      <option value="representative">Representative</option>
                    </select>
                  </div>

                  <button className="btn btn-outline-primary" onClick={this.viewActors}>
                    View All
                  </button>
                  <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
                    Cancel
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
