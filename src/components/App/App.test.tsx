import React from 'react';
import { mount } from '@cypress/react';
import { App } from './App';

describe('App component', () => {
  it('should render', () => {
    mount(<App />);
  });
});

