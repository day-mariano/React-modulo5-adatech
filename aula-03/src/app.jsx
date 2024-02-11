import React from 'react'
import ReactDom from 'react-dom/client' 
import { App } from './pages/App'


// const rootDiv = document.getElementById('root')
// const rootElement = ReactDom.createRoot(rootDiv)
// rootElement.render(<App />)

ReactDom.createRoot(
  document.getElementById('root')
).render(<App />)