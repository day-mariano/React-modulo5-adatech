import { useState } from 'react'
import { CicloDeVida } from '../CicloDeVida'
import { Ciclo2 } from '../Cliclo2'
import { Referencia } from '../Referencia'

const App = () => {
  const [alterna, setAlterna] = useState(2)
   

  return (
    <>
      <div>
        <button onClick={() => setAlterna(1)}>Mostra</button>
        <button onClick={() => setAlterna(2)}>Não mostra</button>
      </div>
      {alterna === 1 && <CicloDeVida/>}
      {/* {alterna === 2 && <Referencia/>} */}
      <Ciclo2/> 
      <Referencia/>
    </>
  )
}

export { App }