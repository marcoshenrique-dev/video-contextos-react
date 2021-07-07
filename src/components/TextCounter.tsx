import React from "react";

import { useCounter } from "../hooks/counter";

const TextCounter: React.FC = () => {
  const { counter, setCounter } = useCounter();

  return <h1>Valor: {counter}</h1>;
};

export default TextCounter;
