import React, { Component } from 'react';
import fileReturnService from '../services/FileReturnService';
//import BootstrapTable from 'react-bootstrap-table-next';

class VerifyTaxFormByRepresentative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representativeId: this.props.match.params.representativeId,
      taxformId: this.props.match.params.taxformId,
      choice: this.props.match.params.choice,
      result: '',
    };
  }

  componentDidMount = () => {
    fileReturnService.verifyTaxformByRepresentative(this.state.representativeId, this.state.taxformId, this.state.choice).then((res) => {
      this.setState({ result: res.data });
      console.log('res:' + res);
    });
  };

  cancel = () => {
    this.props.history.push(`/getTaxFormsForRepresentative/${this.state.representativeId}`);
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

export default VerifyTaxFormByRepresentative;
