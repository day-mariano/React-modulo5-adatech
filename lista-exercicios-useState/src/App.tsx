import Counter from "./components/Counter"
import Form from "./components/Form"
import DynamicList from "./components/DynamicList"

function App() {
  return (
    <>
      <h1>Lista de exercícios: Hook useState</h1>
      <h2>Exercício 1 - Iniciante:</h2>
      <p>
        Crie um componente funcional simples chamado Counter. Utilize o hook useState para gerenciar um estado count iniciado em 0. Exiba o valor de count no componente e adicione dois botões, um para incrementar e outro para decrementar o valor de count em 1. 
      </p>
      <Counter/>
      <h2>Exercício 2 - Básico:</h2>
      <p>
        Modifique o componente Counter para incluir um novo estado step, iniciado em 1. Agora, ao clicar nos botões de incremento e decremento, o valor de count deve ser alterado de acordo com o valor de step.
      </p>
      <Counter step={1}/>
      <h2>Exercício 3 - Intermediário:</h2>
      <p>
        Crie um componente chamado Form com um formulário simples contendo campos para nome e idade. Utilize o hook useState para gerenciar os estados name e age. Exiba os valores desses estados no componente e permita que o usuário os atualize através do formulário.
      </p>
      <Form/>
      <h2>Exercício 4 - Avançado:</h2>
      <p>
      Crie um componente chamado DynamicList que mantenha uma lista dinâmica de itens. Utilize o hook useState para gerenciar o estado da lista. Adicione a capacidade de adicionar novos itens à lista através de um formulário. Cada item deve conter um texto e um botão para removê-lo da lista.
      </p>
      <DynamicList/>
    </>
  )
}

export default App
