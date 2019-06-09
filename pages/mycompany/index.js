import React, { useEffect, useContext, useState } from 'react';
import Router from 'next/router';
import Layout from '../../components/Layout';

import Description from '../../components/MyCompany/Description';
import InfoList from '../../components/MyCompany/InfoList';
import Next from '../../components/MyCompany/Next';
import Title from '../../components/share/CompanyTitle';
import CompanyList from '../../components/share/CompanyList';
import AppContext from '../../AppContext';
import CompanyContext from '../../CompanyContext';
import ErrorContext from '../../ErrorContext';

import { apiGET } from '../../api';

const propTypes = {};
const defaultProps = {};

const onMove = () => Router.push('/add-connections');

const Profile = ({}) => {
  const [myCompany, setMyCompany] = useState(null);
  const { company } = useContext(AppContext);
  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);

  useEffect(() => {
    const loadMyCompany = async () => {
      hideErrorPanel();
      try {
        const { data } = await apiGET('/mycompany')();
        setMyCompany(data);
      } catch (error) {
        setErrorPanel(error);
      }
    };
    loadMyCompany();
  }, [company]);

  return (
    <Layout>
      <CompanyContext.Provider value={{ company: myCompany, domain: company }}>
        {Boolean(myCompany) && (
          <>
            <Title />
            <section className="grid-x grid-padding-x">
              <div className="cell">
                <CompanyList
                  title="Suppliers"
                  question=""
                  answer="Click here to add suppliers"
                  onQuestionClicked={onMove}
                />
                <CompanyList
                  title="Business Customers"
                  question=""
                  answer="Click here to add customers"
                  onQuestionClicked={onMove}
                />
                <InfoList />
              </div>
            </section>
          </>
        )}
      </CompanyContext.Provider>
    </Layout>
  );
};
Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
export default Profile;
