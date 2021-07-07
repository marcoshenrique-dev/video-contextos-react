import React, { createContext, useContext, useState } from "react";

interface ICounter {
  counter: number;
  setCounter(value: number): void;
}

const CounterContext = createContext<ICounter>({} as ICounter);

const CounterProvider: React.FC = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

function useCounter(): ICounter {
  const context = useContext(CounterContext);

  return context;
}

export { CounterProvider, useCounter };
