import React, { useContext } from 'react';
import Router from 'next/router';

import Layout from '../components/Layout';
import Info from '../components/AddConnections/Info';
import AddPanel from '../components/AddConnections/AddPanel';
import AppContext from '../AppContext';
import ErrorContext from '../ErrorContext';

import { apiPUT } from '../api';

const propTypes = {};
const defaultProps = {};

const AddConnections = ({}) => {
  const currentCompany = useContext(AppContext).company;
  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);

  const onAddCustomer = async link => {
    try {
      hideErrorPanel();
      await apiPUT(`/connections/customers/${currentCompany}`)({
        data: [link],
      });
    } catch (error) {
      setErrorPanel(error);
    }
  };
  const onAddSupplier = async link => {
    try {
      hideErrorPanel();
      await apiPUT(`/connections/supplier/${currentCompany}`)({
        data: [link],
      });
    } catch (error) {
      setErrorPanel(error);
    }
  };
  return (
    <Layout>
      <Info />
      <div className="grid-x grid-padding-x container">
        <div className="cell">
          <AddPanel
            title="Add Customers"
            description="Adding connections to your customers helps similar potential customers find your business and you will rank higher in the search results. Simply add the websites of your customers (separate with commas or spaces)."
            uploadLabel="Customers"
            onAdding={onAddCustomer}
          />
          <hr />
          <AddPanel
            title="Add Suppliers"
            description="Adding connections to your suppliers helps you to find the right suppliers for your business. Simply add the websites of your suppliers (separate with commas or spaces)."
            uploadLabel="Suppliers"
            onAdding={onAddSupplier}
          />
        </div>
      </div>
    </Layout>
  );
};
AddConnections.propTypes = propTypes;
AddConnections.defaultProps = defaultProps;
export default AddConnections;
