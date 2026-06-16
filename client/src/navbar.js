import React, { useState } from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom';
const Navbar= ()=> {

// function myFunction(){
//         let x=document.getElementById('myLinks') ;
//         // console.log(x)
//         // x.style.backgroundColor='red';
//         if(x.style.display==="block")
//         {
//          x.style.display="block";
//         }
//         else{
//          x.style.display="block";
//         }
//     }


const [showMediaIcons,setShowMediaIcons]=useState(false);


  return (
       <nav className='navigation'>
        <h2>Apna<span>Kart</span></h2>
        <ul  className={showMediaIcons?" nav-elements " : "myLinks"}> {/*id='myLinks'*/}
           <li><i className="ri-close-line close" onClick={()=>setShowMediaIcons(!showMediaIcons)}></i></li>  {/*"ri-close-line close" */}
           <li><NavLink to="/"><a href='/home'>Home</a></NavLink></li>
           <li><NavLink to="/main"><a href='/main'>Main</a></NavLink></li>
           <li><NavLink to="/about us"><a href='/about us'>About Us</a></NavLink></li>
           <li><NavLink to="/contact us"><a href='/contact us'>Contact Us</a></NavLink></li>
           <h5>ApnaKart has Reserved all it's Rights</h5>
        </ul>
        <form className='search'>
            <input type='search' placeholder='Search Here..' />
            <button><i class="ri-search-line"></i></button>
        </form>
        <div className='menu'><i class="ri-menu-line"  onClick={()=>setShowMediaIcons(!showMediaIcons)}></i></div>
       </nav>
  );

}

export default Navbar;