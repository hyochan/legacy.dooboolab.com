import React from 'react';
import { shallow, render } from 'enzyme';

import Store from '../../../stores/appStore';
import { Home } from '../Home';

const props = {
  store: new Store(),
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
};

// test for the container page in dom
describe('Tab1 page DOM rendering test', () => {
  const page = shallow(
    <Home { ...props }/>,
  );

  it('Home page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
