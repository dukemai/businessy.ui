import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Question from './_Question';
import Company from './_Company';
import AppContext from '../../../AppContext';

const propTypes = {};
const defaultProps = {};
const NUMBER_TO_SHOW = 10;
const getMoreNumber = companies =>
  companies.length < NUMBER_TO_SHOW ? 0 : companies.length - 10;
const CompanyList = ({ title, question, answer, onQuestionClicked, companies = [] }) => {
  const { user } = useContext(AppContext);
  const showingMoreNumber = getMoreNumber(companies) > 0;
  const showQuestion = Boolean(user);
  return (
    <section className="container">
      <p>{title}</p>
      <div className="grid-x">
        <div className="cell medium-6">
          {companies.map(company => (
            <Company key={company} company={company} />
          ))}
          {showingMoreNumber && (
            <a href="#">+{getMoreNumber(companies)} more</a>
          )}
        </div>
        <div className="cell medium-6">
          {showQuestion && (
            <Question onClick={onQuestionClicked} question={question} answer={answer} />
          )}
        </div>
      </div>
    </section>
  );
};
CompanyList.propTypes = propTypes;
CompanyList.defaultProps = defaultProps;
export default CompanyList;
