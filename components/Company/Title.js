import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Title = ({}) => (
  <div className="grid-x grid-padding-x">
    <p className="cell h4 text--company-title callout--grey">
      <img
        className="image--company-logo"
        src="https://images.siftery.com/image/upload/w_34,h_34,dpr_2,c_limit/v1444065129/v1/p/companies/accountingsuite.png"
      />
      Nordic Tech List
    </p>
  </div>
);
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
