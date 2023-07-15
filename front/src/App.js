
// Para navegar entre páginas de uma aplicação React, criaremos rotas 
// utilizando o https://reactrouter.com/en/main 
// Componentes que usuaremos da lib:
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// As páginas (elements) que serão utilizadas para navegação:
import Home from './pages/Home'
import Registration from './pages/Registration'
import Monitores from './pages/List'
// import Products from './pages/Products'



export default function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route path='/' element={<Home/>}></Route> 
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/monitores' element={<Monitores/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

