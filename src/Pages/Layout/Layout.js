import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';
import LazyHeader from '../Header/Header';
const Layout = ({children}) => (
  <div className="Layout" data-testid="Layout">
    <LazyHeader />
    <div>
      {children}
    </div>
  </div>
);

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
