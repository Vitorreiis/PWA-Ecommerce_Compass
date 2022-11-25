import React from 'react'
import ReactDOM from 'react-dom/client'
import CategoryPage from './pages/categoryPage/categoryPage'
import { GlobalStyle } from './components/GlobalStyle'
import App from './App'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle/>
    <CategoryPage />
  </BrowserRouter>
)
