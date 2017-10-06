import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';
import Setup from './Setup';

it('renders Welcome without crashing', () => {
  shallow(<Welcome />)
});

it('renders an h1', () => {
  const wrapper = shallow(<Welcome name="Pedro" />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text().trim()).toBe("Hola Pedro");
});
