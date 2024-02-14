import { ChangeEventHandler, FC, FormEventHandler, useState } from "react"

// crio componente formulário
const Form: FC = () => {
  //evento do form deveria atribuir os dados dos inputs no setName e setIdade
  const enviarFormulario: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  
  }

  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const handleNameChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value)
  }

  const handleAgeChange:ChangeEventHandler<HTMLInputElement> = (event) => {
    setAge(event.target.value)
  }

  return (
    <>
      <p>Nome: {name} </p>
      <p>Idade: {age} </p>
      <form onSubmit={enviarFormulario}>
        <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={handleNameChange} required />
        <input type="number" name="idade" id="idade" placeholder="Digite sua idade" onChange={handleAgeChange} required />
        <input type="submit" value="Salvar" />
      </form>
    </>
  )
}

export default Form