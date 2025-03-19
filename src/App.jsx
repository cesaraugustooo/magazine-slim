import './App.css';
import Header from './Components/Header'; 
import Fluxo from './Screens/Fluxo';
import Formulario from './Screens/Form';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Screens/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/postar' element={<Formulario></Formulario>}></Route>
          <Route path='/confirmar/post' element={<Fluxo/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
