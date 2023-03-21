import React from 'react';

const Counter = (props) => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = React.useCallback(() => {
    setCount((cur) => cur + 1);
  }, []);

  const handleDecrement = React.useCallback(() => {
    setCount((cur) => cur - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;
