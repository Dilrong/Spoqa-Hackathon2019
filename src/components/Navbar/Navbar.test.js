import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<Navbar />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});