import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (

    <>
 <section  className=" homec w-screen h-screen flex  justify-center items-center relative overflow-hidden">
      
      <div id="home" className="absolute z-10"></div>
      
      <div className="relative  z-30 bottom-20 text-white flex flex-col justify-center items-center text-white gap-5 p-2">
       <strong className="w-full text-center text-4xl font-black mb-5	">Contact Us</strong>
  
  
  
  
  
   </div>
   
      
          </section>
          


<section className="mb-2 p-5 ">
<strong className="text-lg">TELL US MORE</strong>
<h3 className="text-2xl  text-center mb-5">Let’s discuss your project

</h3>



<ul className="flex justify-evenly items-center mb-10 p-2 gap-1 text-white w-full spacegray">


<Link to="https://www.facebook.com/weareproduktivo" className=" w-24 h-30 p-3 cursor-pointer"> <img src="img/SocialMedia/1.png" alt="facebook" /></Link>
<Link to="https://instagram.com/weareproduktivo"  className=" w-24 h-30 p-3 cursor-pointer"> <img src="img/SocialMedia/2.png" alt="instagram" /></Link>
<Link to=" https://www.linkedin.com/company/weareproduktivo"  className=" w-24 h-30 p-3 cursor-pointer"> <img src="img/SocialMedia/3.png" alt="linkdin" /></Link>
<Link to="info@weareproduktivo.com"  className="w-24 h-30 p-3 cursor-pointer"> <img src="img/SocialMedia/5.png" alt="google" /></Link>
<Link to="https://api.whatsapp.com/send?phone=59995130033"  className="w-20 h-30 p-3 cursor-pointer"> <img src="img/SocialMedia/9.png" alt="whatsapp" /></Link>





</ul>

<form action="w-11/12 flex flex-col gap-5">

  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="First Name" />

  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Last Name" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Phone" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Email" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Website" />

  <div className="flex flex-col gap-2">
    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Consulting" />
      Consulting
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Content Marketing" />
      Content Marketing
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Email Marketing" />
      Email Marketing
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Digital Ads" />
      Digital Ads
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="SEO" />
      SEO
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Brand Management" />
      Brand Management
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Social Media" />
      Social Media
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Web Design" />
      Web Design
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Branding" />
      Branding
    </label>

    <label className="flex gap-2">
      <input type="checkbox" name="services" value="Other" />
      Other
    </label>
  </div>


  <textarea name="" id="" cols="30" rows="5" placeholder="Let's us know how we can help you" className="border-2 border-solid border-gray-300 w-full p-8 mt-5"></textarea>

</form>


<section className="  flex flex-col p-5 justify-center items-center gap-3 w-full">


<strong className="text-2xl ">Discovery Call

</strong>



<p className="">Book a Discovery Call to see how we can help. We will cover your needs and goals, where you are starting, and possible solutions.
</p>


<Link to="https://portal.weareproduktivo.com/public/appointment-scheduler/656a34b28b362056dffe942e/schedule"> <button className="w-64 rounded-lg p-2 bg-blue-400 text-white text-lg hover:bg-blue-300"> Book a call

</button>
</Link>
<p>All initial consultations are conducted by our founder, Sueene.</p>


<p>
Sueene has over 11 years of experience as a business and marketing professional and has helped many companies reach their full business potential.

</p>

<hr className="p-1 w-80 bg-black/25 mt-2 mb-2" />

<p>We hold the right to reschedule or cancel the meeting at any point.</p>


</section>


</section>

</>
  )
}

export default Contact