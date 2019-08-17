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
      Popular software
    </p>
    <section className="callout grid-x container callout--grey">
      <PopularColumn items={accountingSoftwares} />
      <PopularColumn items={hrSoftwares} />
      <PopularColumn items={recruitmentSoftwares} />
    </section>
  </>
);
PopularList.propTypes = propTypes;
PopularList.defaultProps = defaultProps;
export default PopularList;
