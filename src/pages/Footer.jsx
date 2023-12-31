import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const locations = ["Curaçao", "Bonaire", "Philippines", "United States", "Spain", "Aruba", "The Netherlands", "Colombia"];
  const [locationIndex, setLocationIndex] = useState(0);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar a la siguiente ubicación cada 4 segundos
      setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 4000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
<footer className="spacegray w-full flex flex-col justify-center items-center p-5 gap-5 md:flex-row md:flex-wrap justify-around items-start">

<Link className="cursor-pointer" to="/produktivo">
<div className="w-28 h-full flex items-center justify-center text-white  scale-150 md:w-24 	">  <img src="produktivo02.png" alt=""  className="w-full h-full object-cover"/></div>
</Link>

<ul className="w-full flex flex-wrap flex-col text-white gap-3 text-lg md:w-40 text-sm	 ">

<strong className="text-yellow-400 w-full text-xl ">Site Menu</strong>

<Link onClick={() => setShowMenu(false)}  to="#services"> Services</Link>
<Link  onClick={() => setShowMenu(false)}  to="#">Resources</Link>
<Link to="produktivo/contact">Contact Us</Link>

<Link  to="produktivo/cookie&pilicies">Cookie Policies
</Link> 
<Link  to="produktivo/privacy&policy
">Privacy Policy
</Link> 

</ul>


<ul className="w-full flex flex-col flex-wrap justify-between items-start text-white gap-3 text-lg md:w-40 text-sm  ">

<strong className="text-yellow-400 w-full text-xl  ">Services</strong>

<Link  to="produktivo/consultation">  <li>Consultation</li></Link> 
            <Link  to="produktivo/virtual&business&support">   <li>Virtual Business Support</li></Link> 
            <Link  to="produktivo/system&implementation">   <li>System Implementation</li></Link> 
            <Link  onClick={() => setShowMenu(false)}  to="#">Marketing</Link> 
<Link to="produktivo/social&media">Social Media
</Link> 


</ul>

<div className="w-full flex flex-col gap-3 md:w-28 ">


<ul className="w-full flex flex-col justify-center items-center text-white">

<strong className="text-yellow-400 w-full text-xl text-center mb-5 ">JOIN OUR NEWSLETTER
</strong>

<button className="w-64 rounded-lg p-2 bg-yellow-400 text-black">Join</button>



</ul>

</div>


<p className="w-full text-white mt-5 text-sm mb-5 w-full">
        Serving you with ❤️ from: {locations[locationIndex]}
      </p>


      <p className="text-xs text-white">© 2023 Produktivo | Digital Solutions for the Modern Business

</p>

</footer>  )
}

export default Footer