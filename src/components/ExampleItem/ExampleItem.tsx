import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StLi = styled.li`
  color: red;
`;

const ExampleItem: React.FC = () => {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <ul>
        <StLi data-testid="list">{count}</StLi>
        <StLi data-testid="list">2</StLi>
        <StLi data-testid="list">3</StLi>
      </ul>
      <Button onClick={handleClick} content="Content" />
    </div>
  );
};

export default ExampleItem;
