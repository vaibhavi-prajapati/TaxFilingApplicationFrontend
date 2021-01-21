import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';
//import BootstrapTable from 'react-bootstrap-table-next';

class FileReturn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: this.props.match.params.customerId,
      result: '',
    };
  }

  componentDidMount = () => {
    fileReturnService.fileReturn(this.state.customerId).then((res) => {
      this.setState({ result: res.data });
    });
  };

  cancel = () => {
    this.props.history.push(`/viewTaxformByCustomer/${this.state.customerId}`);
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Here's an update!</h2>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> {this.state.result}</th>
              </tr>
            </thead>
          </table>
          <button className="btn btn-primary" onClick={this.cancel} style={{ marginLeft: '10px' }}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default FileReturn;
