import Router from 'next/router';
import Layout from '../../components/Layout';

import Description from '../../components/MyCompany/Description';
import InfoList from '../../components/MyCompany/InfoList';
import Next from '../../components/MyCompany/Next';
import Title from '../../components/share/CompanyTitle';
import CompanyList from '../../components/share/CompanyList';

const propTypes = {};
const defaultProps = {};

const onMove = () => Router.push('/add-connections');

const Profile = ({}) => (
  <Layout>
    <Title />
    <section className="grid-x grid-padding-x">
      <div className="cell">
        <CompanyList
          title="Suppliers"
          question=""
          answer="Click here to add suppliers"
          onMove={onMove}
        />
        <CompanyList
          title="Business Customers"
          question=""
          answer="Click here to add customers"
          onMove={onMove}
        />
        <InfoList />
      </div>
    </section>
  </Layout>
);
Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
export default Profile;
