import './App.css';
import Header from './Components/Header'; 
import Formulario from './Screens/Form';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Confirmar from './Screens/ConfirmarPost';
import Noticia from './Screens/AllNoticias';
import Footer from './Components/Footer';
import InNoticia from './Screens/Noticia';
import Login from './Screens/Login';
import Cadastrarse from './Screens/Cadastrarse';
import Perfil from './Screens/Perfil';

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
          <Route path='noticia/:param' element={<InNoticia></InNoticia>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/cadastrarse' element={<Cadastrarse></Cadastrarse>}></Route>
          <Route path='/perfil' element={<Perfil></Perfil>}></Route>

        </Routes>
        <Footer></Footer>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
