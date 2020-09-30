import React from 'react';
import { shallow } from 'enzyme';
import ShopPicture from './ShopPicture';

describe('<ShopPicture />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ShopPicture />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
