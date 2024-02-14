import Counter from "./components/Counter"

function App() {
  return (
    <>
      <h1>Lista de exercícios: Hook useState</h1>
      <h2>Exercício 1 - Iniciante:</h2>
      <p>
        Crie um componente funcional simples chamado Counter. Utilize o hook useState para gerenciar um estado count iniciado em 0. Exiba o valor de count no componente e adicione dois botões, um para incrementar e outro para decrementar o valor de count em 1. 
      </p>
      <Counter/>
    </>
  )
}

export default App
