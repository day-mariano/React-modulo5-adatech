import { useState } from "react"

function Counter() {
  const [contador, setContador] = useState(0)
  function incrementar(){
    setContador(contador + 1)
    console.log(contador)
  }
  function decrementar(){
    setContador(contador - 1)
    console.log(contador)
  }
  return (
    <>
    <p>{contador}</p>
    <button onClick={incrementar} >Incrementar </button>
    <button onClick={decrementar} >Decremetar</button>
    </>
  )
}

export default Counter