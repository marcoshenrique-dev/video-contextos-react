import React from "react";

import { useCounter } from "../hooks/counter";

const ButtonCounter: React.FC = () => {
  const { setCounter, counter } = useCounter();

  return <button onClick={() => setCounter(counter + 1)}>Aperta</button>;
};

export default ButtonCounter;
