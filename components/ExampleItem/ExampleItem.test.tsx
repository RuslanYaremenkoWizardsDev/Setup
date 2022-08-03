import {
  screen, within,
} from '@testing-library/react';
import React from 'react';
import { shallowRender } from '../../helpers/testsHelpers';
import ExampleItem from './ExampleItem';

describe('ExampleItem', () => {
  it('123', async () => {
    const component = shallowRender(<ExampleItem />);
    expect(component).toMatchSnapshot();
    expect(await screen.findAllByTestId('list')).toHaveLength(3);
  });
  it('1234', async () => {
    const component = shallowRender(<ExampleItem />);
    const btn = within(component.container).getByTestId('button');
    btn.click();
    const lists = await screen.findAllByTestId('list');
    const firstLi = lists[0];
    expect(firstLi.textContent).toBe('2');
  });
});
