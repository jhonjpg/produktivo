import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

     // State to manage the visibility of nested lists
     const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showResorces, setShowResorces] = useState(false);

  
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Puedes ajustar el umbral según tu diseño
      setShowMenu(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!showMenu) {
        // Lógica de desplazamiento aquí
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMenu]);
  
  // Function to toggle the visibility of the nested list
  const toggleVisibility = (setter) => {
    setter((prevState) => !prevState);
    // setter(!showMenu);

  };
  return (
<>

<nav className="spacegray flex w-full justify-between items-center h-20 fixed z-50 ">
      <Link onClick={() => setShowMenu(false)} to="/produktivo">
        <div className="w-28 h-full flex items-center justify-center text-white scale-105">
          <img src="produktivo02.png" alt="" className="w-full h-full object-cover" />
        </div>
      </Link>

      {windowWidth <= 768 ? (
        <div className="w-28 flex justify-center items-center h-full">
          <div onClick={() => toggleVisibility(setShowMenu)} className="w-1/2 flex justify-center items-center h-full">
            {!showMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
            )}

            {showMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            )}
          </div>
        </div>

      ) : (
        <ul className="text-white text-lg flex gap-5 w-2/4 justify-evenly items-center ">
          <Link onClick={() => setShowMenu(false)} to="produktivo/"><li className="text-center">Home</li></Link>



          <li className="group relative">
  Services{showServices ? ' -' : ' +'}
  <ul className={`text-base ml-5 flex flex-col gap-1 absolute top-full left-0 ${showServices ? 'block' : 'hidden'} group-hover:block bg-gray-400 p-3 flex flex-col gap-10 w-60`}>
    <Link className=" hover:text-gray-700"onClick={() => setShowMenu(false)} to="produktivo/consultation">
      <li>Consultation</li>
    </Link>
    <Link className=" hover:text-gray-700"onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">
      <li>Virtual Business Support</li>
    </Link>
    <Link className=" hover:text-gray-700"onClick={() => setShowMenu(false)} to="produktivo/system&implementation">
      <li>System Implementation</li>
    </Link>
    <li className="cursor-pointer hover:text-gray-700" onClick={() => toggleVisibility(setShowMarketing)}>
      Marketing{showMarketing ? ' -' : ' +'}
    </li>
    {showMarketing && (
      <ul className="text-sm ml-2 flex flex-col gap-1">
        <Link className=" hover:text-gray-700"onClick={() => setShowMenu(false)} to="produktivo/content&marketing">
          <li>Content Marketing</li>
        </Link>
        <Link  className=" hover:text-gray-700"onClick={() => setShowMenu(false)} to="produktivo/email&marketing">
          <li>Email Marketing</li>
        </Link>
        <Link className=" hover:text-gray-700"  onClick={() => setShowMenu(false)} to="produktivo/digital&ads">
          <li>Digital Ads</li>
        </Link>
        <Link className=" hover:text-gray-700" onClick={() => setShowMenu(false)} to="produktivo/lead&generation">
          <li>Lead Generation</li>
        </Link>
      </ul>
    )}
    <Link className=" hover:text-gray-700" onClick={() => setShowMenu(false)} to="produktivo/social&media">
      <li>Social Media</li>
    </Link>
  </ul>
</li>




<li className="group relative">
Resorces{showServices ? ' -' : ' +'}
  <ul className={`text-base ml-5 flex flex-col gap-1 absolute top-full left-0 ${showServices ? 'block' : 'hidden'} group-hover:block bg-gray-400 p-3 flex flex-col gap-10 w-60`}>
    <Link className=" hover:text-gray-700" onClick={() => setShowMenu(false)} to="produktivo/blog">
      <li>blog</li>
    </Link>
    <Link className=" hover:text-gray-700" onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">
      <li>Suscribe to Newslette</li>
    </Link>
    
  </ul>
</li>


       
          <Link onClick={() => setShowMenu(false)} to="produktivo/contact"><li>Contact Us</li></Link>

        </ul>

      )}
{windowWidth >= 768 ? (
  <strong className="md:w-50 mr-10 text-1xl text-white">+1 (906)-209-4054</strong>
) : null}

</nav>




{showMenu && (

<nav id="sideMenu" className={`sideMenu spacegray w-64 fixed h-screen flex flex-col items-center justify-center z-40 ${showMenu ? 'open' : ''}`}>

<div className="w-10/12	 h-28 scale-105"> <img src="produktivo02.png" alt=""  className="w-full h-full object-cover"/></div>

<ul className="text-white text-lg flex flex-col gap-5">
<Link onClick={() => setShowMenu(false)}  to="/produktivo">   <li className="mb-4">Home</li></Link> 

             <li  onClick={() => toggleVisibility(setShowServices)}>
            Services{showServices ? ' -' : ' +'}
          </li>
          {showServices && (
            <ul className="text-base ml-5 flex flex-col gap-1">
            <Link onClick={() => setShowMenu(false)}  to="produktivo/consultation">  <li>Consultation</li></Link> 
            <Link onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">   <li>Virtual Business Support</li></Link> 
            <Link onClick={() => setShowMenu(false)} to="produktivo/system&implementation">   <li>System Implementation</li></Link> 
            <li onClick={() => toggleVisibility(setShowMarketing)}>
              Marketing{showMarketing ? ' -' : ' +'}
              </li>
              {showMarketing && (
                <ul className="text-sm ml-2 flex flex-col gap-1">
                  <Link onClick={() => setShowMenu(false)}  to="produktivo/content&marketing"><li>Content Marketing</li></Link>
                 
<Link onClick={() => setShowMenu(false)}  to="produktivo/email&marketing">  <li>Email Marketing</li></Link>
<Link onClick={() => setShowMenu(false)}  to="produktivo/digital&ads">   <li>Digital Ads</li></Link>
                  <Link onClick={() => setShowMenu(false)}  to="produktivo/lead&generation">   <li>Lead Generation</li></Link>
                </ul>
              )}
                         <Link onClick={() => setShowMenu(false)}  to="produktivo/social&media">     <li>Social Media</li></Link>


  
            </ul>
          )}

          <li onClick={() => toggleVisibility(setShowResorces)}>
            Resorces{showResorces ? ' -' : ' +'}
          </li>
          {showResorces && (
                <ul className="text-base ml-5 flex flex-col gap-1">
                 <Link onClick={() => setShowMenu(false)} to="produktivo/blog">  <li>Blog</li>    </Link>
                  <li>Suscribe to Newsletter</li>
                </ul>
                              )}

                
<Link onClick={() => setShowMenu(false)}  to="produktivo/contact">  <li>Contact Us</li></Link>
        </ul>



<p className="mt-40 text-white text-xs w-52">© 2023 WEARREPRODUKTIVO Marketing | Marketing for a New Generation</p>

</nav>
              )}


</>




)
}

export default Navbar