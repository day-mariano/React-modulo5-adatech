import { useEffect, useState } from "react";

const CicloDeVida = () => {
  const [incremento, setIncremento] = useState(0);
  console.log("constructor");

  const incrementar = () => setIncremento((state) => state + 1);

  const funcaoDestruidora = () => console.log("componentDidUnmount");

  // Roda 1x na Montagem e fução desttruidora
  useEffect(() => {
    console.log("componentDidMont");
    return funcaoDestruidora;
  }, []);

// Roda 1x quando inicia a aplicação
  useEffect(() => {
    incrementar()
  }, []);

  // Roda 1x quando inicia e quando modifica o incremento
  useEffect(() => {
    console.log("componetnDidUpdate", incremento)
  }, [incremento]);

  return (
    <>
      <h1>Ciclo de vida</h1>
      <p>atualizado {incremento} vezes</p>
      <button onClick={incrementar}>+</button>
    </>
  );
}; 

export { CicloDeVida };
