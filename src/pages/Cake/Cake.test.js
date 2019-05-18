import React from 'react';
import renderer from 'react-test-renderer';
import Cake from './Cake';

describe('Cake', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<Cake />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});