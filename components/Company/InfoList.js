import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Info from './Info';
import CompanyContext from '../../CompanyContext';

const propTypes = {};
const defaultProps = {};

const InfoList = ({ domain }) => {
  const { company } = useContext(CompanyContext);
  const list = [
    {
      label: 'Description',
      content: company.description,
    },
    {
      label: 'Website',
      content: domain || (company.domainAliases || []).join(', '),
    },
    {
      label: 'SaaS and industry',
      content: 'Information Technology',
    },
    {
      label: 'Location',
      content: company.location,
    },
    {
      label: 'Linkedin',
      content: `https://www.linkedin.com/${company.linkedIn}`,
    },
  ];
  return (
    <div className="grid-x grid--info-list container">
      {list.map((info, key) => (
        <Info
          {...info}
          key={key}
          isLongText={info.label === 'Description'}
          isLink={info.label === 'Website' || info.label === 'Linkedin'}
        />
      ))}
    </div>
  );
};
InfoList.propTypes = propTypes;
InfoList.defaultProps = defaultProps;
export default InfoList;
