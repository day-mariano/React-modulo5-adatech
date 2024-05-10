import { useState } from 'react'
import { CicloDeVida } from '../CicloDeVida'
import { Ciclo2 } from '../Cliclo2'
// import { Referencia } from '../Referencia'

const App = () => {
  const [alterna, setAlterna] = useState(1)
   

  return (
    <>
      <button onClick={() => setAlterna(1)}>Mostra</button>
      <button onClick={() => setAlterna(2)}>Não mostra</button>
      {alterna === 1 && <CicloDeVida/>}
      {/* {alterna === 2 && <Referencia/>} */}
      <Ciclo2/> 
    </>
  )
}

export { App }