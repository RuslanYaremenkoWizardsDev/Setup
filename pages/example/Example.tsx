import Link from 'next/link';
import React from 'react';
import ExampleItem from '../../components/ExampleItem';

interface IProps {

}

const Example: React.FC<IProps> = () => (
  <div>
    <h1>exampleasdasdasdsdasd</h1>
    <ExampleItem />
    <Link href="/">Home</Link>
  </div>
);

export default Example;
