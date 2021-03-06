import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import EmailInput from './_EmailInput';
import GetStarted from './_GetStarted';

const propTypes = {};
const defaultProps = {};
const tags = ['CRM', 'HR', 'Email'];
const Explore = ({ className, onStartClicked, isAuthenticated }) =>
  !isAuthenticated && (
    <section
      className={classnames(
        'callout callout--explore callout--grey',
        className
      )}
    >
      <p className="text--explore text-center h5">
        Discover the software that other businesses like yours are using
      </p>
      <p className="text-center">
        {isAuthenticated
          ? 'Text for logged in users'
          : "Get started - it's free. Enter your work email address"}
      </p>
      {!isAuthenticated && (
        <div className="grid-container">
          <div className="grid-x align-center grid-margin-x">
            <div className="medium-6 cell">
              <div className="input-group">
                <EmailInput />
                <GetStarted onStartClicked={onStartClicked} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
Explore.propTypes = propTypes;
Explore.defaultProps = defaultProps;
export default Explore;
