import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

     // State to manage the visibility of nested lists
     const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showResorces, setShowResorces] = useState(false);


  // Function to toggle the visibility of the nested list
  const toggleVisibility = (setter) => {
    setter((prevState) => !prevState);
  };
  return (
<>

<nav className="spacegray flex w-full justify-between items-center  h-20 fixed z-50 overflow-hidden	">

<Link onClick={() => setShowMenu(false)}  to="/"> <div className="w-28 h-full flex items-center justify-center text-white  scale-105	">  <img src="produktivo02.png" alt=""  className="w-full h-full object-cover"/></div>
</Link>
<div className=" w-28 flex  justify-center items-center  h-full"> 

<div className="w-1/2 flex justify-center items-centerh-full">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></div>


<div onClick={() => toggleVisibility(setShowMenu)} className="w-1/2 flex justify-center items-center h-full">
  
{!showMenu && (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      )}

      {showMenu && (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
        </svg>
      )}

</div>

</div>




</nav>

{showMenu && (

<nav id="sideMenu" className={`sideMenu spacegray w-64 fixed h-screen flex flex-col items-center justify-center z-40 ${showMenu ? 'open' : ''}`}>

<div className="w-10/12	 h-28 scale-105"> <img src="produktivo02.png" alt=""  className="w-full h-full object-cover"/></div>

<ul className="text-white text-lg flex flex-col gap-5">
          <li className="mb-4">Client Hub</li>

             <li onClick={() => toggleVisibility(setShowServices)}>
            Services{showServices ? ' -' : ' +'}
          </li>
          {showServices && (
            <ul className="text-base ml-5 flex flex-col gap-1">
            <Link onClick={() => setShowMenu(false)}  to="/consultation">  <li>Consultation</li></Link> 
            <Link onClick={() => setShowMenu(false)} to="/virtual&business&support">   <li>Virtual Business Support</li></Link> 
            <Link onClick={() => setShowMenu(false)} to="/system&implementation">   <li>System Implementation</li></Link> 
            <li onClick={() => toggleVisibility(setShowMarketing)}>
              Marketing{showMarketing ? ' -' : ' +'}
              </li>
              {showMarketing && (
                <ul className="text-sm ml-2 flex flex-col gap-1">
                  <Link onClick={() => setShowMenu(false)}  to="/content&marketing"><li>Content Marketing</li></Link>
                 
<Link onClick={() => setShowMenu(false)}  to="/email&marketing">  <li>Email Marketing</li></Link>
<Link onClick={() => setShowMenu(false)}  to="/digital&ads">   <li>Digital Ads</li></Link>
                  <Link onClick={() => setShowMenu(false)}  to="/lead&generation">   <li>Lead Generation</li></Link>
                </ul>
              )}
                         <Link onClick={() => setShowMenu(false)}  to="/social&media">     <li>Social Media</li></Link>


  
            </ul>
          )}

          <li onClick={() => toggleVisibility(setShowResorces)}>
            Resorces{showResorces ? ' -' : ' +'}
          </li>
          {showResorces && (
                <ul className="text-base ml-5 flex flex-col gap-1">
                  <li>Blog</li>
                  <li>Suscribe to Newsletter</li>
                </ul>
                              )}

                
<Link onClick={() => setShowMenu(false)}  to="/contact">  <li>Contact Us</li></Link>
        </ul>



<p className="mt-40 text-white text-xs w-52">© 2023 WEARREPRODUKTIVO Marketing | Marketing for a New Generation</p>

</nav>
              )}


</>




)
}

export default Navbar