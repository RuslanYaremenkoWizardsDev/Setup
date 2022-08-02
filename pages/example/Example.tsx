import Link from 'next/link';
import React from 'react';
import ExampleItem from './ExampleItem';
import { helper } from './helper';

interface IProps {

}

const Example: React.FC<IProps> = () => {
  helper();
  return (
    <div>
      <h1>example</h1>
      <ExampleItem />
      <Link href="/">Home</Link>
    </div>
  );
};

export default Example;
