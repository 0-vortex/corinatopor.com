import React from 'react';
import {Link} from 'gatsby';

import Seo from '../components/Seo';

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Welcome to Corina, the simplest way to start publishing with Gatsby.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus praesent nibh suscipit nisl quis.</p>
    <p>Tempus, nullam fermentum porttitor nisl, natoque pharetra.</p>
    <p>Amet tincidunt nunc interdum et suspendisse elementum faucibus vitae.</p>
    <Link to="/blog/">Go to experimental blog page</Link>
  </React.Fragment>
);

export default IndexPage;
