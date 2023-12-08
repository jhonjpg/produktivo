import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {  Pagination, Navigation } from 'swiper/modules';
import VimeoVideo from '../components/VimeoVideo';
import { InView } from 'react-intersection-observer';
import { Parallax, Background } from 'react-parallax';
import MySwiper from '../components/MySwiper';
import Shapes from '../components/Shapes';
import UrlContent from '../components/UrlContent';


const Home = () => {


  return (

    <>


    <section  className=" homec w-screen h-screen flex  justify-evenly items-center relative overflow-hidden">
      
<div id="home" className="absolute z-10"></div>

<div className="relative text-3xl z-30 mt-30 text-start pl-2 w-full text-white md:flex justify-center text-4xl w-1/2 ">


   <p className="text-start w-full md:w-1/3"> Marketing for a <span className="font-extrabold">new generation</span></p>


  <div className="videovimeo flex items-center justify-center   w-full  overflow-hidden  h-72 z-20 md:w-1/2 md:scale-150">
  <VimeoVideo/>
  </div>
  </div>


    </section>


    <InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<section ref={ref} className={inView ? 'animationUp w-screen h-92 bg-gray-50 flex flex-col gap-5 p-5 bg-gray-50 opacity-1 relative overflow-hidden ' : 'w-screen h-92 bg-gray-50 flex flex-col gap-5 p-5 bg-gray-50 opacity-0'}>


  <h3 className="font-extrabold	z-20 md:text-3xl">DIGITAL SOLUTIONS FOR THE MODERN BUSINESS</h3>

  <h1 className="text-3xl z-20 md:w-1/2 text-5xl">We help <span className="font-extrabold	">SMEs 10x their sales </span> through data-driven digital strategies.
</h1>


<p className=" z-20 md:w-1/2 text-xl">Our team, a dynamic collective of remote professionals specializing in content creation, digital marketing, and business solutions, thrives on diversity and innovation. Rejecting the 'one-size-fits-all' approach, we deliver comprehensive consulting, digital marketing, creative content creation, and system solutions services tailored to your unique business needs. That will empower your company to make the right decisions to attract the best customers. If you’re looking for a traditional marketing agency, you’ve come to the wrong place. Produktivo is for those ready to embrace the future of digital engagement and client interaction.

</p>


<Parallax className="w-full h-screen z-10 md:relative"
 strength={200}
 style={{
  position: 'absolute',
  top:"-50px",
  right:"0px"
  
}}>
   
<Background className="w-screen h-full  relative top-50 flex  relative  md:w-full md:h-full md:left-0 z-10"  >
     
 {/* <div className="globo w-60 h-72 relative right-10 top-40 md:w-full left-60  ">  <img src="/globos.png" className="w-full h-full object-cover md:object-contain" alt="" /></div> */}
               
 {/* <div className=" w-60 h-72 relative top-60 left-40 md:left-10">  <img src="/globos.png" className="w-full h-full object-cover" alt="" /></div> */}



 <div className=" w-full h-72 md:h-auto md:w-screen ">  
 

 <Shapes/>
 
 
 
 </div>



                </Background>

                
     
     
         </Parallax>
     
</section>

)}
</InView>


<section>

  <MySwiper/>
  
</section>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<section  id="services" ref={ref} className={inView ? 'services' : ''}>


  <ul  className="w-full p-1 md:flex flex-wrap ">

<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/system.png" alt="" width="70px" />
</div>

<h2 className="text-xl font-extrabold ">System Setup and Management </h2>
<p className="text-gray-400">Master your operational efficiency! We oversee the implementation and management of CRM, digital tools, project management tools, and team coordination, ensuring your business runs like a well-oiled machine.


</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/content.png" alt="" width="70px" />
</div>

<h2 className="text-xl font-extrabold ">Content Marketing </h2>
<p className="text-gray-400">Create, publish, and promote compelling content. We focus on generating more traffic and building a loyal community around your brand.

</p>

</li>



<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/social.png" alt="" width="70px" />
</div>

<h2 className="text-xl font-extrabold ">Social Media Marketing </h2>
<p className="text-gray-400">Develop and manage high-impact social campaigns. We focus on cultivating a dedicated customer base, turning followers into fans.
</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/consultation.png" alt="" width="70px"/>
</div>

<h2 className="text-xl font-extrabold ">Marketing Consultation </h2>
<p className="text-gray-400">We meticulously develop marketing strategies that cut through the noise, targeting potential clients efficiently to bring in high-quality leads and drive significant conversions.
</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/seo.png" alt="" width="70px" />
</div>

<h2 className="text-xl font-extrabold ">SEO Enhancement  </h2>
<p className="text-gray-400">Enhance your online visibility with our precision-driven SEO services. Our approach is designed to increase your website traffic, draw in more customers, and boost your online presence.



</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/targeted.png" alt="" width="70px"/>
</div>

<h2 className="text-xl font-extrabold ">Targeted PPC Advertising 

</h2>
<p className="text-gray-400">Get your brand at the forefront of Google’s search results, specifically tailored to your ideal search phrases.
</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/emaily.png" alt="" width="70px" />
</div>

<h2 className="text-xl font-extrabold ">Email Marketing 
</h2>
<p className="text-gray-400">Transform casual visitors into dedicated fans. We specializes in crafting personalized email content that resonates, attracts, and engages your target audience effectively.

</p>

</li>




<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/ads.png" alt="" width="70px"/>
</div>

<h2 className="text-xl font-extrabold ">Digital Ad Optimization 
</h2>
<p className="text-gray-400">Capture your target audience's attention with curated digital ad strategies. Increase website traffic and conversions by getting noticed on various social media platforms.
</p>

</li>


<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/management.png" alt="" width="70px"/>
</div>

<h2 className="text-xl font-extrabold ">Reputation Management 
</h2>
<p className="text-gray-400">Take charge of your online presence with Produktivo. We help you manage critical aspects of your reputation, including reviews, listings, and social media engagement.

</p>

</li>

<li className="flex flex-col gap-3 w-11/12 p-5 md:w-1/3">

<div className="">
  <img src="img/virtual.png" alt="" width="70px"/>
</div>

<h2 className="text-xl font-extrabold ">Virtual Assistant Support
</h2>
<p className="text-gray-400">Our dedicated team of virtual assistants will handle your administrative tasks, manage schedules, and customer support, freeing you to focus on growing your brand and nurturing customer relationships.


</p>

</li>



  </ul>
</section>


)}
</InView>



<InView triggerOnce="false">
    {({ inView, ref, entry }) => (
      <section ref={ref} className={inView ? ' animationUp spacegray w-screen h-screen flex flex-col w-full items-center p-3 pt-10 gap-2 relative text-white pb-8 ' : 'spacegray w-screen h-screen flex flex-col w-full items-center p-3 pt-10 gap-2 relative text-white  opacity-0'}>

<h3 className="font-extrabold text-xl	">MAKE THE RIGHT DECISION</h3>

<h4 className="text-2xl mb-5 ">Let’s start on your project together  

</h4>

<button className="bg-yellow-400 p-2 rounded-lg w-32 text-black">Get in touch

</button>


<div className="absolute w-full h-72 top-60">

  <img className="w-full h-full object-contain" src="world.png" alt="" />
</div>

<strong className="w-full text-lg text-center mt-60 z-30">TRUSTED BY THE BEST CLIENTS</strong>

<ul className="bestClient w-full flex flex-wrap mt-3 mb-5 gap-8 z-20 uppercase font-extrabold text-lg justify-around bg-gray-800/25 md:w-1/2 ">

<li className="w-24 h-30 bg-white overflow-hidden md:w-40"><img src="img/clients/client1.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 bg-black md:w-40"><img src="img/clients/client2.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 bg-white md:w-40"><img src="img/clients/client3.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 md:w-40"><img src="img/clients/client4.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 md:w-40 bg-white p-1"><img src="img/clients/client5.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 md:w-40"><img src="img/clients/client6.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 bg-white md:w-40"><img src="img/clients/client7.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 bg-black md:w-40"><img src="img/clients/client8.png" className="w-full h-full object-contain" alt="" /></li>
<li className="w-24 h-30 p-1 bg-white md:w-40"><img src="img/clients/client9.png" className="w-full h-full object-contain" alt="" /></li>
{/* <li className="w-24 h-30 bg-whites"><img src="img/clients/client10.png" className="w-full h-full object-contain" alt="" /></li> */}

</ul>
</section>


)}
</InView>



<section className="testimonials spacegray mt-1 flex flex-col text-white p-5 gap-3 overflow-hidden">
  <strong>TESTIMONIALS </strong>



  <InView triggerOnce="false">
    {({ inView, ref, entry }) => (
  <h6  ref={ref} className={inView ? 'animationUp text-yellow-400 text-2xl' : 'text-yellow-400 text-2xl  opacity-0'}>What our Clients says:  </h6>


  )}
</InView>

  <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={false}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper w-screen"
      >
        <SwiperSlide className="w-full h-auto flex flex-col justify-around">


<p className="mb-5 p-1 w-11/12">I had the pleasure of working closely with Sue as my VA. Sue consistently demonstrated exceptional organizational skills, high productivity, and a strong commitment to delivering good-quality work. 

One of the standout qualities that impressed me the most was Sue's ability to adapt to new tasks and challenges quickly. 

Beyond her technical skills, Sue is a proactive problem solver and an excellent communicator. She kept me updated on progress, anticipated needs, and provided valuable suggestions that improved our overall workflow. 

Her contributions have made a significant impact on my productivity and allowed me to focus on what matters most in my business.

I highly recommend Sue to anyone seeking a reliable VA.</p>



<div className="w-full">
<strong className="text-yellow-400 ">Tromp Attorneys

</strong>
  <img src="comas.png" alt="" width="80px" />
</div>

        </SwiperSlide>

        <SwiperSlide className=" w-full h-auto flex flex-col justify-around">


<p className="mb-5 p-1 w-11/12">It's been 1 year of me having Sue as a virtual assistant in my social media marketing agency called, Crab Social, and what a pleasant ride it has been. Sue is super hands on, getting things done faster than I ever imagined possible. She thinks in solutions for whatever challenge you might have. In the one year that we've worked together she has automated my business helping me take it to the next level and thanks to her we've created and launched a social media awareness digital course called Konsiente, 
which has been on my list of things I want to do for over 2 years. She is very communicative every step of the way and always willing to explore new areas even if she hasn't done it before.
 She works very structured, is very pro-active in thinking ahead, takes action right away where possible and is knowledgeable in a lot of different business areas. I would 10/10 recommend any entrepreneur or business owner looking to work more efficient and take their business to the next level to hire her as she is worth every penny. 

</p>



<div className="w-full">
<strong className="text-yellow-400 ">CrabSocials

</strong>
  <img src="comas.png" alt="" width="80px" />
</div>

        </SwiperSlide>
      
      
   
      </Swiper>



</section>



  <section className="overflow-hidden w-full md:flex">
<InView triggerOnce="false">
    {({ inView, ref, entry }) => (


<div ref={ref} className={inView ? 'animationRight flex flex-col p-3 gap-3 md:flex-row' : ''}>

<div className="w-full md:w-1/2 flex flex-col justify-around gap-5">

<strong className="text-xl">PRODUKTIVO CLIENT PORTAL </strong>
<h3 className="text-2xl">All-in-One<span className="font-extrabold"> Management</span> and Insights<span className="font-extrabold"> at Your</span> Fingertips

</h3>

<p className="mb-5 text-gray-400 ">Our digital marketing solutions are built round your business. Our team work transparently, giving you control over your marketing activities. The Produktivo Client Portal is your one-stop hub for managing your brand's online presence and tasks. This intuitive platform provides access to all your digital tools, streamlines brand management, and delivers real-time performance analytics, ensuring you're always in the driver's seat of your digital journey.

</p>
</div>

<div className="w-full h-72 md:w-1/2">

<img src="marketing.jpeg" alt=""  className="w-full h-full object-cover"/>


</div>



</div>
)}
</InView>

</section>



<div className="relative w-full  h-96">

<Parallax className="pill"
 strength={-400}
 style={{
  position: 'absolute',
  top:"30px",
  right:"0px"
  
}}>

        <Background className="w-screen h-auto"  >
     
<section className="flex flex-col p-3 gap-3 bg-yellow-400 pt-40 md:items-center">

<strong className="text-3xl w-full text-start">Partners</strong>
<h3 className="text-2xl  w-full text-center">All Trusted Brands
</h3>

<ul className="w-full flex flex-wrap p-8 gap-8 justify-between text-xl items-center font-bold md:w-1/2 md:justify-center md:items-center">
    <li className="w-24 h-30 p-1 bg-white md:1/3 overflow-hidden"><img src="img/tools/tools1.png" className="w-full h-full object-contain" alt="" /></li>
    <li className="w-1/3 font-extrabold p-1 bg-white text-lg text-center text-gray-700 md md:bg-white text-3xl">Constant Contact</li>

    <li className="w-24 h-30 p-1 bg-white md:1/3 overflow-hidden"><img src="img/tools/tools4.png" className="w-full h-full object-contain" alt="" /></li>
    <li className="w-1/3 font-extrabold p-1 bg-white text-lg text-center text-center text-gray-700 md:bg-white text-3xl">Google</li>

    <li className="w-24 h-30 p-1 bg-white md:1/3 overflow-hidden"><img src="img/tools/tools2.png" className="w-full h-full object-contain" alt="" /></li>

    <li className="w-24 h-30 p-1 bg-white md:1/3 overflow-hidden"><img src="img/tools/tools3.png" className="w-full h-full object-contain" alt="" /></li>

    <li className="w-1/3 font-extrabold p-1 bg-white text-lg text-center text-gray-700 md:bg-white text-3xl">Facebook</li>
    <li className="w-1/3 font-extrabold p-1 bg-white text-lg text-center text-gray-700 md:bg-white text-3xl">Instagram</li>
    <li className="w-1/3 font-extrabold p-1 bg-white text-lg text-center text-gray-700 md:bg-white text-3xl">Dubsado</li>
    <li className="w-1/3 font-extrabold p-1 bg-white text-sm text-center text-gray-700 md:bg-white text-3xl">Honeybook</li>
  </ul>

</section>

           </Background>


    </Parallax>
    </div>

    <section className="w-full flex flex-col p-4 gap-3 md:flex-row flex-wrap">


<strong className="text-lg md:w-full">TELL US MORE</strong>
<h3 className="text-2xl  text-center mb-5 md:w-full">Let’s discuss your project

</h3>

<form className="w-full flex flex-col gap-5 md:w-1/2">

  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="First Name" />

  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Last Name" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Phone" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Email" />
  <input type="text" className="w-full p-4 border-gray-300 border-2 border-solid mb-5" placeholder="Website" />

  <div  className="flex flex-col gap-2">
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

<div className="hidden md:block	md:w-1/3	"> <img src="arrova.png" className="w-full h-full object-fit-contain" alt="" /></div>

</section>

</>

    )
}

export default Home