import { useState } from 'react'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Marketplace from './pages/Marketplace/Marketplace';
import Membership from './pages/Membership/Membership';
import PDFBooks from './pages/PDF Books/PDFBooks';
import AudioBooks from './pages/AudioBooks/AudioBooks';
import AboutUs from './pages/About Us/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import AddBook from './pages/AddBook/AddBook';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Marketplace" element={<Marketplace />}/>
        <Route path="/Membership" element={<Membership />}/>
        <Route path="/PDFBooks" element={<PDFBooks />}/>
        <Route path="/AudioBooks" element={<AudioBooks />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
        <Route path="/AddBook" element={<AddBook />}/>




        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element= {<SignUp />} />
      </Routes>
      
    </div>
  )
}

export default App
