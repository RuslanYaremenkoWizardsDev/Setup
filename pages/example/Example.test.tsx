import {
  render,
} from '@testing-library/react';
import React from 'react';
import Example from './Example';

describe('Example', () => {
  it('1', async () => {
    const { container } = render(<Example />);
    expect(container.querySelectorAll('h1').length).toBe(1);
  });
});
