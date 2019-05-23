import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const AddPanel = ({ title, description, uploadLabel }) => (
  <section>
    <h4 className="text-center">{title}</h4>
    <p className="text-center">{description}</p>
    <div className="grid-x align-center">
      <div className="cell medium-6">
        <div className="input-group">
          <input
            type="text"
            placeholder={`${title} websites`}
            className="input-group-field"
          />
          <div className="input-group-button input-group-button--add">
            <button className="button">Add</button>
          </div>
        </div>
        <p className="text-center">
          <a href="#">
            Or click here to upload a spreadsheet of your {uploadLabel}.
          </a>
        </p>
      </div>
    </div>
  </section>
);
AddPanel.propTypes = propTypes;
AddPanel.defaultProps = defaultProps;
export default AddPanel;