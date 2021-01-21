import React from 'react';

const Header = () => (
  <header className="">
    <div className=" text-center">
      <h2 style={{ backgroundColor: '#1FDEE3', color: 'white', fontFamily: 'fantasy' }} className="col py-2 fixed-top">
        Tax Filing Application
      </h2>
      <p style={{ paddingTop: '50px' }}></p>
      <marquee width="80%" direction="left" scrollamount="8">
        <h6>
          <mark style={{ backgroundColor: '#7DF7FB', color: '#2D5455', fontFamily: 'revert', fontWeight: 'normal' }}>Due to Covid situation, The government extended the deadline to file income tax return (ITR) for FY 2019-20 for most individuals from the earlier deadline of December 31, 2020, to February 10, 2021</mark>
        </h6>
      </marquee>
    </div>
  </header>
);

export default Header;
