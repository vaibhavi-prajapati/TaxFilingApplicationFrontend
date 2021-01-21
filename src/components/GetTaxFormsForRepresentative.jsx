import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';
//import BootstrapTable from 'react-bootstrap-table-next';

class getTaxFormsForRepresentative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representativeId: this.props.match.params.representativeId,
      taxforms: [],
      hasError: false,
    };
  }

  componentDidMount() {
    fileReturnService
      .getTaxFormsForRepresentative()
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
    this.props.history.push(`/viewTaxformByRepresentative/${this.state.representativeId}/${taxformId}`);
  };

  cancel = () => {
    this.props.history.push(`/mainpage-representative/${this.state.representativeId}`);
  };

  render() {
    return (
      <div>
        {this.state.hasError && (
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th> No tax forms to verify</th>
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
              <table className="table table-striped table-bordered">
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
                        <button style={{ marginLeft: '10px' }} onClick={() => this.viewTaxForm(taxform.taxformId)} className="btn btn-info">
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

export default getTaxFormsForRepresentative;
