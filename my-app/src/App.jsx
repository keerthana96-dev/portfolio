import React from 'react'
import Navbar from './Compo/Nav/Navbar';
import Person from './Compo/Person/Person';
import About from './Compo/About/About';
import Services from './Compo/Servic/Services';
import Mywork from './Compo/Mywork/Mywork';
import Contact from './Compo/Contact/Contact';
import Footer from './Compo/Footer/Footer';





const App = () => {
  return (
    <div>
   
      <Navbar/>
      <Person/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;