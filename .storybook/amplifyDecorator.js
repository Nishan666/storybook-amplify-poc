import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

export const withAmplifyDecorator = (Story) => {
  return <Story />;
};