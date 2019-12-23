import { render, shallow } from 'enzyme';

import Members from '../';
import React from 'react';
import Store from '../../../stores/appStore';

const props = {
  store: new Store(),
  navigation: {
    navigate: jest.fn(),
  },
  history: {
    push: jest.fn(),
  },
  getString: jest.fn(),
};

// test for the container page in dom
describe('Members page DOM rendering test', () => {
  const page = shallow(<Members {...props} />);

  it('Members page has to be matched to snapshot', () => {
    expect(page).toMatchSnapshot();
  });
});
