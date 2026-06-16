import React from 'react';
// import './App.css';
// import Navbar from './navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/contact';
import About from './components/pages/about';
// import Loginapp from './components/pages/login';
import Loginapp from './components/pages/login';
import Navbar2 from './components/pages/nav2';
import Register from './components/pages/register';

function App() {
  return (
    // <div className="App">
    //   <h1>Welcome to react app by Prince Patel</h1>
    // </div>
    <>
    <Navbar2/>
    {/* <Navbar/> */}
    <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route path='/contact us' element={<Contact/>}/>
       <Route path='/About us' element={<About/>}/>
       <Route path='/sign-up' element={<Loginapp/>} />
       <Route path='/register' element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
