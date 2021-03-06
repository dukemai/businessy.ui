import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Question = ({ question, answer, onClick }) => (
  <>
    <span>{question}</span>
    <button onClick={onClick} className="button button--company-answer">{answer}</button>
  </>
);
Question.propTypes = propTypes;
Question.defaultProps = defaultProps;
export default Question;
