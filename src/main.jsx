import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./index.css";
import App from './App';
// import Movie from './pages/movie';

import Search from './pages/Search';
import Home from './pages/Home';
import Movie from './pages/Movie.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      {/* //elemento component pai app*/}

      <Route element={<App/>}>
        {/* //rotas do projeto  */}
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Movie/>}/>
        <Route path="search" element={<Search/>}/>
    
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
