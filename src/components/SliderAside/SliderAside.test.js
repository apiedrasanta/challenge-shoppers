import React from 'react';
import { shallow } from 'enzyme';
import SliderAside from './SliderAside';

describe('<SliderAside />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SliderAside />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
