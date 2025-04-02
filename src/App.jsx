import './App.css';
import Header from './Components/Header'; 
import Formulario from './Screens/Form';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Confirmar from './Screens/ConfirmarPost';
import Noticia from './Screens/AllNoticias';
import Footer from './Components/Footer';
import InNoticia from './Screens/Noticia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/confirmar' element={<Confirmar></Confirmar>}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/postar' element={<Formulario></Formulario>}></Route>
          <Route path='/noticias/:id' element={<Noticia></Noticia>}></Route>
          <Route path='/noticia/:param' element={<InNoticia></InNoticia>}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
