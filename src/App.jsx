import './App.css';
import Header from './Components/Header'; 
import Formulario from './Screens/Form';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Confirmar from './Screens/ConfirmarPost';
import Noticia from './Screens/Noticia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/confirmar' element={<Confirmar></Confirmar>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/postar' element={<Formulario></Formulario>}></Route>
          <Route path='/noticia/' element={<Noticia></Noticia>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
