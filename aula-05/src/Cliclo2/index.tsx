// import { useRef } from 'react'
import { useEffect } from "react"
import { useState } from 'react'

const Ciclo2 = () => {
  const [nome, setNome] = useState('clique no botão para ter uma surpresa')

  const atualizar = () => {
    console.log("atualizou")
    // return recadinho()
  }

  const recadinho = () => {
    alert("I ❤️ U")
  }

  useEffect(() => {
    // console.log("useEffect na prática")
    // alert("A página foi renderizada e como efeito colateral vc ganha um alerta :)");
    return atualizar
  })
  
  return (
    <>
      <h2>Ciclo na prática</h2>
      <p>testando useEffect na prática</p>
      <button onClick={() => setNome(':3')}>Clique</button>
      <p>{nome}</p>
    </>
   )

}

export {Ciclo2}