import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p style={{ paddingBottom: '70px' }}></p>
        <footer style={{ backgroundColor: '#1FDEE3' }} className="footer fixed-bottom">
          <div className="col py-2">
            <center>
              <span className="text-light">All Rights Reserved 2021 @TFA</span>
            </center>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
