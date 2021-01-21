import React, { Component } from 'react';
import AddTaxDetailsService from '../services/AddTaxDetailsService';

class ViewEmpForEmployer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employerId: this.props.match.params.id,
      employees: [],
    };
  }

  componentDidMount() {
    AddTaxDetailsService.viewAllEmployeesByOrganization(this.state.employerId).then((res) => {
      this.setState({ employees: res.data });
    });
  }

  editEmployee(customerId) {
    this.props.history.push(`/addTaxDetailsForEmployee/${customerId}/${this.state.employerId}`);
  }

  cancel() {
    this.props.history.push(`/mainpage-employer/${this.state.employerId}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th> PAN</th>
                <th> Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.customerId}>
                  <td> {employee.customerId} </td>
                  <td> {employee.name} </td>
                  <td> {employee.pan}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.customerId)} className="btn btn-info">
                      Add Tax Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: '10px' }}>
          Back
        </button>
      </div>
    );
  }
}

export default ViewEmpForEmployer;
