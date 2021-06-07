import React from 'react';
import PropTypes from 'prop-types';

const Header = ({siteTitle}) => (
  <React.Fragment>{siteTitle}</React.Fragment>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
