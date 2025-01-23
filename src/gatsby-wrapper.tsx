import React from 'react';
import { Layout } from './components/DefaultLayout';

interface WrapperProps {
  element: any;
  props: any;
}

export const wrapPageElement = ({ element, props }: WrapperProps) => {
  return <Layout {...props}>{element}</Layout>;
};
