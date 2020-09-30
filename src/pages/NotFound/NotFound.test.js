import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotFound />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
