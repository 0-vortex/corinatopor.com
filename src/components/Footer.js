import React from 'react';
// import {Link} from 'gatsby';
import {Flex, Box, Text} from '@theme-ui/components';
import {
  FaYoutube, FaTwitter, FaInstagram, FaLinkedin,
} from 'react-icons/fa';

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
      <Text>
        <FaYoutube />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </Text>
      <Text css={{
        color: '#cecece',
        lineHeight: 2,
      }}
      >
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Built with Gatsby, designed by Tiamat Tech
      </Text>
    </Box>
  </Flex>
);

export default Footer;
