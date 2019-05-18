import React from 'react';
import { shallow, render } from 'enzyme';

import Store from '../../../stores/appStore';
import { Home } from '../Home';

// test for the container page in dom
describe('Tab1 page DOM rendering test', () => {
  const testStore = new Store();
  const page = shallow(
    <Home store={testStore} />,
  );

  it('Home page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
