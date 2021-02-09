import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {Box} from '@theme-ui/components';
import {Global, css} from '@emotion/react';

import Header from './Header';
import Footer from './Footer';

const StickyFooter = css`
html, body, #___gatsby, #gatsby-focus-wrapper {
  min-height: 100vh;
}
#gatsby-focus-wrapper {
  display: flex;
  flex-direction: column;
}
`;

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Global styles={StickyFooter} />
      <Header siteTitle={data.site.siteMetadata?.title} />
      <Box
        m="auto"
        p={2}
        css={{
          maxWidth: 1170,
          width: `100%`,
          flex: `1 0 auto`,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
