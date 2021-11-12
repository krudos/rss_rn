import React from 'react';
import {render} from '@testing-library/react-native';
import {Separator} from './Separator';
describe('Separator', () => {
  test('renders correctly', () => {
    const {toJSON} = render(<Separator />);
    expect(toJSON()).toMatchSnapshot();
  });
});
