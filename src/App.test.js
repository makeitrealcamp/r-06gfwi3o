import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Welcome from './Welcome';
import Setup from './Setup';

it('renders App without crashing', () => {
  shallow(<App />);
});

it('renders three Welcome components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Welcome).length).toBe(3);
});
