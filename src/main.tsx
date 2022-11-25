import React from 'react'
import ReactDOM from 'react-dom/client'
import CategoryPage from './pages/categoryPage/categoryPage'
import { GlobalStyle } from './components/GlobalStyle'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <CategoryPage />
  </React.StrictMode>
)
