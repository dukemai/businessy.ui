import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ConnectedCompany from './_ConnectedCompany';

const propTypes = {};
const defaultProps = {};
const companies = [''];
const ResultItem = ({ onClick }) => (
  <div className="cell callout container">
    <h5>
      <Link href="/company">
        <a> Nordic Tech List</a>
      </Link>
    </h5>
    <div onClick={onClick} className="media-object grid-x">
      <div className="media-object-section cell medium-11">
        <p>
          Comprehensive data and information service tracking Nordic tech
          investments in Sweden, Denmark, Norway, Finland and Iceland.
        </p>
      </div>
      <div className="media-object-section cell small-4 medium-1 grid-x align-right">
        <div className="cell">
          <div className="thumbnail">
            <img
              className="image--result-item"
              src="https://images.siftery.com/image/upload/w_34,h_34,dpr_2,c_limit/v1444065129/v1/p/companies/accountingsuite.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <button className="button hollow">Expense Tracking</button>
    </div>
    <div>
      <ConnectedCompany />
      <ConnectedCompany />
      <ConnectedCompany />
      <ConnectedCompany />
      <a href="#">+4856 more</a>
    </div>
  </div>
);
ResultItem.propTypes = propTypes;
ResultItem.defaultProps = defaultProps;
export default ResultItem;
