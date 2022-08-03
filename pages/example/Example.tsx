import Link from 'next/link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExampleItem from './ExampleItem';
import { countSelector } from '../../store/example/selectors';
import { increment, decrement } from '../../store/example/reducer';

interface IProps {

}

const Example: React.FC<IProps> = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {' '}
        Counter
        <button onClick={dispatch(decrement())} type="button">-</button>
        {count}
        <button onClick={dispatch(increment())} type="button">+</button>
      </h1>
      <ExampleItem />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Example;
