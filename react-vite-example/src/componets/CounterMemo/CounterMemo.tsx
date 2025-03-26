import React, { useCallback, useMemo, useState } from "react";

// memo is used to prevent unnecessary re-renders
const Child = React.memo(({ counter }) => {
  console.log("Child rendered");
  return <p>Counter value: {counter}</p>;
});

const Child2 = ({ counter2 }) => {
  console.log("Child2 rendered");
  return <p>Counter value: {counter2}</p>;
};

function Calculation({ num }) {
  // useMemo only recalculates when the dependencies change
  const result = useMemo(() => {
    return num * 2;
  }, [num]);

  return <p>Result is: {result}</p>;
}

function CounterMemo() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useCallback returns a memoized version of the function
  const increment = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log("CounterMemo rendered");

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Child counter={counter} />
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment 2
      </button>
      <Child2 counter={counter2} />
      <Calculation num={counter} />
    </div>
  );
}

export { CounterMemo };
