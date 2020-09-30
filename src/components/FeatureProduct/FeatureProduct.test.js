import React from 'react';
import { shallow } from 'enzyme';
import FeatureProduct from './FeatureProduct';

describe('<FeatureProduct />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FeatureProduct />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
