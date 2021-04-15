import React from 'react';
// full DOM rendering renders all children which can sometimes cause test failures,
// e.g. for Header it would fail because it expects the NavLink to be used inside a router
// shallow rendering only renders the current component which is all we need in this case
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify');

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
