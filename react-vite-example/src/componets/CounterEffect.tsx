import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("The counter has a value of", count);
  }, [count]);

  return (
    <>
      <p>The counter has a value of {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export { CounterEffect };
