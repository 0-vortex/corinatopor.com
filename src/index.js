/** @jsx jsx */
import {jsx} from '@theme-ui/core';
import Layout from './components/Layout';

export const wrapPageElement = ({element, props}) => (
  <Layout {...props} children={element} />
);
