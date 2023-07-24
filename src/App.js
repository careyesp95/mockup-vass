import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./Context/AlertContext.js";
import LandingPage from './page/LandingPage';
import Contact from './components/Contact/Contact.js';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return ( 
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Navbar/>
          <LandingPage />
          <Contact />
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider> 
  ); 
} 
 
export default App;