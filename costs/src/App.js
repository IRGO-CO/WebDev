import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/pages/Home';
import Contact from './Components/pages/Contact';
import About from './Components/pages/About';
import NewProject from './Components/pages/NewProject';

import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

function App() {
  return (
    
      <Router>
            <Navbar />
        <Container customClass="min_height">
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/About' element={<About/>} />
            <Route exact path='/Contact' element={<Contact/>} />
            <Route exact path='/NewProject' element={<NewProject/>} />
          </Routes>
        </Container>
        <Footer />
      </Router>
  )
}

export default App;
