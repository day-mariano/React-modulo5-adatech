import React, { useState } from "react";

const Button = (props) => {
  const { children } = props;
  const [contador, setContador] = useState(0);

  // função callback do onClick
  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children} {contador}
    </button>
  );
};

export { Button };
