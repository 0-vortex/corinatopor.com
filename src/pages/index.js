import React from 'react';
import {Link} from 'gatsby';

import {Heading, Text} from '@theme-ui/components';
import Seo from '../components/Seo';

const IndexPage = () => (
  <React.Fragment>
    <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading>Welcome to Corina, the simplest way to start publishing with Gatsby.</Heading>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus praesent nibh suscipit nisl quis.</Text>
    <Text>Tempus, nullam fermentum porttitor nisl, natoque pharetra.</Text>
    <Text>Amet tincidunt nunc interdum et suspendisse elementum faucibus vitae.</Text>
    <Link to="/blog/">Go to experimental blog page</Link>
  </React.Fragment>
);

export default IndexPage;
