import {base} from '@theme-ui/preset-base';

const theme = {
  ...base,
  useColorSchemeMediaQuery: true,
  useCustomProperties: true,
  colors: {
    text: `#1F2937`,
    background: `#FEF9FA`,
    primary: `#FBECEF`,
    secondary: `#4686D8`,
    muted: `#9B9BA5`,
    modes: {
      dark: {
        text: `#fefefe`,
        background: `#0e141b`,
        primary: `#ff0a78`,
        secondary: `#4a67f7`,
        muted: `#182635`,
      },
    },
  },
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512,
  ],
  fonts: {
    body: 'Esteban, system-ui, sans-serif',
    heading: 'Montserrat, system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96,
  ],
  fontWeights: {
    body: 500,
    heading: 800,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};

export default theme;
