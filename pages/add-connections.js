import Router from 'next/router';
import Layout from '../components/Layout';

import Info from '../components/AddConnections/Info';
import AddPanel from '../components/AddConnections/AddPanel';

const propTypes = {};
const defaultProps = {};

const AddConnections = ({}) => (
  <Layout>
    <Info />
    <div className="grid-x grid-padding-x container">
      <div className="cell">
        <AddPanel
          title="Add Customers"
          description="Adding connections to your customers helps similar potential customers find your business and you will rank higher in the search results. Simply add the websites of your customers (separate with commas or spaces)."
          uploadLabel="Customers"
        />
        <hr />
        <AddPanel
          title="Add Suppliers"
          description="Adding connections to your suppliers helps you to find the right suppliers for your business. Simply add the websites of your suppliers (separate with commas or spaces)."
          uploadLabel="Suppliers"
        />
      </div>
    </div>
  </Layout>
);
AddConnections.propTypes = propTypes;
AddConnections.defaultProps = defaultProps;
export default AddConnections;
