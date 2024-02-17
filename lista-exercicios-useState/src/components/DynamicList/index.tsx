import { useState, FC, ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react"

// Crie um componente chamado DynamicList
const DynamicList: FC = () => {
  //mantenha uma lista dinâmica de itens
  const [lista, setLista] = useState<string[]>([])
  const [item, setItem] = useState("")
  
  const enviarForm:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    
    // capacidade de adicionar novos itens à lista através de um formulário33
    setLista((lista) => [item, ...lista])
    setItem("")
  }

  const handleNovoItem:ChangeEventHandler<HTMLInputElement> = (event) => {
    // console.log(event)
    setItem(event.target.value)

  }
  // retorna se o elemento atual for diferente do que quero remover
  const handleRemover = (item:string) => {
    setLista(lista.filter((itemDaLista) => {
      return itemDaLista !== item
    }))
  }

  return (
    <>
      <form onSubmit={enviarForm}>
        <input type="text" placeholder="Novo item" value={item} onChange={handleNovoItem} required/>
        <input type="submit" value="Adicionar" />
      </form>

      <ul>
        {lista.map((item) => (
        <li key={item}>
          {item} <button onClick={() => handleRemover(item)}> x </button>
        </li>))}
      </ul>
    </>
  )
}

export default DynamicList