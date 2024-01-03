import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/headers/Navbar'
import Footer from './components/footer/Footer';
import Contacto from './pages/contacto/Contacto'
import Nosotros from './pages/nosotros/Nosotros';
import Home from './pages/home/home';


function App() {

  return (
    <div>
      
      <Router>
      
<NavBar></NavBar>


<Routes>
<Route exact path="/" element={<Home/>} />
<Route path="/contacto" element={<Contacto/>} />
<Route path="/quienes-somos" element={<Nosotros/>} />
 

</Routes>

</Router>
<Footer></Footer>
</div>
  )
}

export default App
