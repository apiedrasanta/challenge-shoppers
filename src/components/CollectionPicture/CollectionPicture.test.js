import React from 'react';
import { shallow } from 'enzyme';
import CollectionPicture from './CollectionPicture';

describe('<CollectionPicture />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CollectionPicture />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
