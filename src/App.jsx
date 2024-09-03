import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Home from './home.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
const App = ()=>{
  return(
    <>
     <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer></Footer>          
     </BrowserRouter>
    </>
  )
}

export default App;