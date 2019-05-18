import React from 'react';
import renderer from 'react-test-renderer';
import MenuButton from './MenuButton';

describe('MenuButton', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<MenuButton />);
  });

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});