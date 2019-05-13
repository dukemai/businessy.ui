import React from 'react';
import PropTypes from 'prop-types';
import Question from './_Question';
import Company from './_Company';

const propTypes = {};
const defaultProps = {};
const companies = [...new Array(5).keys()];
const CompanyList = ({ title, question, answer, onMove }) => (
  <section className="container">
    <p>{title}</p>
    <div className="grid-x">
      <div className="cell medium-6">
        {companies.map(company => (
          <Company key={company} />
        ))}
        <a href="#">+4856 more</a>
      </div>
      <div className="cell medium-6">
        <Question onClick={onMove} question={question} answer={answer} />
      </div>
    </div>
  </section>
);
CompanyList.propTypes = propTypes;
CompanyList.defaultProps = defaultProps;
export default CompanyList;
