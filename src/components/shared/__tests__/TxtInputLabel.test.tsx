import React from 'react';
import { shallow } from 'enzyme';

import TxtInputLabel from '../TxtInputLabel';

describe('TxtInputLabel component test', () => {
  const component = shallow(
    <TxtInputLabel
      style={{ marginTop: 18 }}
      label='EMAIL'
      value='mock-email'
      placeholder='email'
      onTxtChanged={ () => { return; }}
    />,
  );

  it('component matches with its snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('first children prop has set correctly', () => {
    expect(component.props().children[0].props.children).toEqual('EMAIL');
  });

  describe('component is triggered with mock argument', () => {
    it('second children prop changes value', () => {
      const input = component.find('input');
      input.simulate('change', {
        target: {
          value: 'mock-email',
        },
      });
      expect(component.props().children[1].props.value).toEqual('mock-email');
    });
  });
});
