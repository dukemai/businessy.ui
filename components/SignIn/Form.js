import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Form = ({ onLinkedInLoginClicked, onGoogleLoginClicked }) => (
  <>
    <div className="medium-6 cell text-center">
      <button onClick={onLinkedInLoginClicked} className="button">
        Login via Linkedin
      </button>
    </div>
    <div className="medium-6 cell text-center">
      <button onClick={onGoogleLoginClicked} className="button">
        Login via Google
      </button>
    </div>
  </>
);
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;
