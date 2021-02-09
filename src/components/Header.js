import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import {useColorMode} from '@theme-ui/color-modes';
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import {Box, Flex} from '@theme-ui/components';

import theme from '../gatsby-plugin-theme-ui';

const Header = ({siteTitle}) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box bg="primary">
      <Flex
        css={{
          maxWidth: 1170,
        }}
        m="auto"
        py={3}
      >
        <Box css={{
          flex: 1,
          maxWidth: 126,
        }}
        >
          <Link to="/" title={siteTitle}>
            Corina Topor
          </Link>
        </Box>
        <Box css={{
          flex: 1,
          textAlign: 'right',
          lineHeight: 0,
        }}
        >
          <DarkModeSwitch
            sunColor={theme.colors.modes.dark.accent}
            moonColor={theme.colors.accent}
            checked={colorMode === 'default'}
            onChange={() => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default');
            }}
            size={42}
          />
        </Box>
      </Flex>
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
