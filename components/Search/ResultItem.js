import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ConnectedCompany from './_ConnectedCompany';
import { apiGET, apiPUT } from '../../api';

const propTypes = {};
const defaultProps = {};
const companies = [''];
const ResultItem = ({
  id,
  name,
  imageUrl,
  description,
  onClick,
  industryCategories,
}) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const loadCompany = async () => {
      const { data } = await apiGET(`/company/${id}`)();
      setCustomers(data.customers);
    };
    loadCompany();
  }, []);

  return (
    <div className="cell callout container">
      <h5>
        <Link href={`/company/${id}`}>
          <a>{name}</a>
        </Link>
      </h5>
      <div onClick={onClick} className="media-object grid-x">
        <div className="media-object-section cell medium-11">
          <p>{description}</p>
        </div>
        <div className="media-object-section cell small-4 medium-1 grid-x align-right">
          <div className="cell">
            <div className="thumbnail">
              <img className="image--result-item" src={imageUrl} />
            </div>
          </div>
        </div>
      </div>
      <div className="industry-tag">
        {industryCategories.map(industry => (
          <a
            key={industry}
            href={`search?q=${industry}`}
            className="button hollow"
          >
            {industry}
          </a>
        ))}
      </div>
      <div>
        {customers.map(customer => (
          <ConnectedCompany domain={customer} key={customer} />
        ))}
      </div>
    </div>
  );
};
ResultItem.propTypes = propTypes;
ResultItem.defaultProps = defaultProps;
export default ResultItem;
