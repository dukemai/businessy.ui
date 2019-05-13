import React from 'react';
import PropTypes from 'prop-types';

import PopularColumn from './_PopularColumn';

const propTypes = {};
const defaultProps = {};
const accountingSoftwares = ['Dooer', 'Wint', 'PE Accounting'];
const hrSoftwares = ['&Frankly', 'Benify', 'Happy at Work'];
const recruitmentSoftwares = ['The Hub', 'Teamtailor', 'Uptrail'];


const PopularList = ({}) => (
  <>
    <p className="text-center h4 text--title-popular">
      Popular software companies
    </p>
    <section className="callout grid-x container">
      <PopularColumn title="Accounting Software" items={accountingSoftwares} />
      <PopularColumn title="HR Software" items={hrSoftwares} />
      <PopularColumn title="Recruitment Software" items={recruitmentSoftwares} />
    </section>
  </>
);
PopularList.propTypes = propTypes;
PopularList.defaultProps = defaultProps;
export default PopularList;
