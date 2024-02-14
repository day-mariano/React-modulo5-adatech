import { useState, FC } from "react"

interface CounterProps {
  step?: number
}

const Counter: FC<CounterProps> = ({step}) => {
  const [contador, setContador] = useState(step || 0 )

  function incrementar(){
    setContador(contador + 1)
    console.log(contador)
  }
  function decrementar(){
    if (contador > 0) {
      setContador(contador - 1)
      console.log(contador)
    }
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