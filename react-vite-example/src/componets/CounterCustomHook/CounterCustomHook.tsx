import { useCounter } from "../../hooks/useCounter";

const CounterCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    );

};

export { CounterCustomHook };