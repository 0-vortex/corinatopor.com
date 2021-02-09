import React from 'react';
import {Link} from 'gatsby';
import {Flex, Box, Text} from '@theme-ui/components';

const Footer = () => (
  <Flex
    bg="primary"
    css={{
      flexShrink: 0,
    }}
  >
    <Box
      css={{
        maxWidth: 1170,
        display: 'flex',
      }}
      m="auto"
      p={5}
    >
      <Text css={{
        color: '#cecece',
        lineHeight: 2,
      }}
      >
        Copyright Pine Co Tech
        {' '}
        {new Date().getFullYear()}
        {' '}
        |
        {' '}
        <Link to="/contact">Contact</Link>
        {' '}
        |
        {' '}
        <Link to="/design-system">Design System</Link>
      </Text>
    </Box>
  </Flex>
);

export default Footer;
