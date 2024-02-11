// A R R A Y S
const arr = [1, 2, 3]

// 1. SOMAR ARRAY
function somaArray(arr) {
  const total = arr.reduce((inicio, numero) => {
    return inicio + numero
  }, 0)
  console.log("1.",total)
}
somaArray(arr)

// 2. MAIOR NUMERO
function maiorNumero(arr) {
  console.log("2.",Math.max(...arr))
}
maiorNumero(arr)

// 3. MEDIA ARRAY
function mediaArray() {
  const total = arr.reduce((inicio, numero) => {
        return inicio + numero
      }, 0)
const media = (total / arr.length)
console.log("3.", media)
}
 mediaArray()

 // O B J E T O S
 const obj1 = {
   nome: "Dayana",
   idade: 29,
   cidade: "Florianópolis"
  }

// 4. CONTAR PROPRIEDADES
function contarProriedades(obj) {
  const quantidade = Object.keys(obj).length
  console.log("4",quantidade)
}
contarProriedades(obj1)

// 5. JUNTAR OBJETOS
const obj2 = {
  profissão: "Desesenvolvedora de software",
  stack: "Front-end",
}

function juntarObjetos( objeto1, objeto2 ) {
  const newObj = { ...objeto1, ...objeto2 }
  console.log("5.", newObj)
}
juntarObjetos(obj1, obj2)

// 6. ENCONTRAR PROPRIEDADE
function encontrarPropriedade(obj, chave) {
  console.log("6.", chave)
}
encontrarPropriedade(obj1, obj1.nome)

// P R O M I S E
// 7. DELAYED PROMISE
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("7.", "resolveu")
      resolve()
    }, 1000)
  })
}
delayedPromise()

// 8. FETCH DATA 
function fetchData() {
  const fetchPromise = fetch("https://api.postmon.com.br/v1/cep/88034130")

  fetchPromise.then((resposta) => {
    console.log("8.", resposta)
  })
}
fetchData()

// 9. GERAR NUMERO ALEATORIO
function gerarNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numAleatorio = Math.random().toFixed()
      console.log("9.", numAleatorio)
      resolve()
    }, 2000)
  })
}
gerarNumeroAleatorio()

// 10. EXECUTAR APOS TEMPO
function executarAposTempo() {
  const meuTimeout = setTimeout(timer => {
    console.log("10.", "executou após o tempo")
  }, 2000)
  return meuTimeout
}

// 11. CANCELAR EXECUÇAO
function cancelarExecucao(timeout) {
  clearTimeout(timeout)
}
cancelarExecucao(executarAposTempo())

// 12. INTERVALO PERSONALIZADO
function intervaloPersonalizado() {
  setInterval(() => {
    console.log("12. executou com intervalos")
  }, 2000)
}
// intervaloPersonalizado()

// 13. CONTADOR INTERVAL
let contador = 0

function contadorInterval() {
  const intervalo = setInterval(() => {
      if(contador < 10) {
        contador++
        console.log("13.", contador)
      }
  }, 1000)
  return intervalo
}
contadorInterval()

// 14. PARAR CONTADOR
function pararContador(intervalo) {
  clearInterval(intervalo)
  console.log("14. parou o contador")
}
pararContador(contadorInterval())

// 15. GEREAR NUMEROS ALEATORIOS
function gerarNumerosAleatorios() {
  setInterval(()=> {
    const numGerado = Math.random().toFixed()
      console.log("15.")
  }, 500)
}
// gerarNumerosAleatorios()

// 16. PRIMEIRO E ULTIMO
function primeiroEUltimo(arr) {
  const primeiro = arr[0]
  const ultimo = arr[arr.length-1]
  const newArr = [primeiro, ultimo]
  console.log("16.", newArr)
}
primeiroEUltimo(arr)
// 17. EXTRAIR INFO
const arrayDeObjetos = [
  {
    nome: "Dayana",
    idade: 29,
  },
  {
    nome: "Vítor",
    idade: 27
  }
]
function extrairInfo(arrObj) {
  // let {pessoa1, pessoa2} = arrObj
  // let {nome, idade} = pessoa1
  let newArrNum = []
  arrObj.forEach(pessoa => {
    // newArrNum.push({idade})
    let {nome, idade} = pessoa
    newArrNum.push(idade)
  });
  console.log("17.", newArrNum)
}
extrairInfo(arrayDeObjetos)

// 18. SEPARAR ARRAYS
function separarArrays(arr) {
  let impares = []
  let pares = []
  
  for (const numero of arr) {
    if (numero % 2 == 0) {
      pares.push(numero);
    } else {
      impares.push(numero);
    }
  }
  console.log("18.", pares, impares)
  return impares, pares
}
separarArrays(arr) 

// 19. INFO PESSOA
function infoPessoa(obj) {
  const { nome, idade, cidade} = obj
  const stringFormatada = `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
  console.log("19.", stringFormatada)
}
infoPessoa(obj1)

// 20. DESESTRUTURAR USUARIO
 const usuario = {
  id: 1,
  nome: "Fulana",
  email: "fulana@gmail.com"
 }

function desestruturarUsuario(obj) {
  const { id, nome, email } = obj
  const usuarioDesestruturado = { id, email}
  console.log("20.", usuarioDesestruturado)
}
desestruturarUsuario(usuario)

// 21. INFORMACOES LIVRO
const livro = {
  titulo: "Orgulho e Preconceito",
  autor: "Jane Austen",
  ano : 1813
}
function informacoesLivro(livro) {
  const { titulo, autor, ano } = livro
  const stringFormatada = `O livro ${titulo} foi escrito por ${autor} em ${ano}`
  console.log("21", stringFormatada)
}
informacoesLivro(livro)

// 22. CONCATENAR ARRAYS
const arr2 = [4,5,6]
function concatenarArrays(arr1, arr2) {
  const arrayConcatenado = [...arr1, ...arr2]
  console.log("22.", arrayConcatenado)
}
concatenarArrays(arr, arr2)

// 23. SOMA NUMEROS
function somaNumeros(...numeros) {
  const soma = numeros.reduce((acc,curr) => acc + curr, 0)

  console.log("23.", soma)
  return soma
}
somaNumeros(2,4,6)

// 24. MESCLAR OBJETOS
function mesclarObjetos(objetos) {
  const {...objeto} = objetos
  const objetoResultante = { ...obj1, ...obj2}
  console.log("24.", objetoResultante)
}
mesclarObjetos(obj1, obj2)