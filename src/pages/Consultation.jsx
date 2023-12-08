import React from 'react'
import { Link } from 'react-router-dom'

const Consultation = () => {
  return (

    <>
    <section  className=" homec w-screen h-screen flex  justify-center items-center relative overflow-hidden">
      
    <div id="home" className="absolute z-10"></div>
    
    <div className="relative  z-30 bottom-20 text-white flex flex-col justify-center items-center text-white gap-5 p-2">
     <strong className="w-full text-center text-4xl font-black mb-5	">Consultation</strong>


<p className="text-sm">Discuss ideas, brainstorm, mentoring, and tap into our years of business & content creation experience.
</p>

 </div>
 
    
        </section>
        

        <section className="flex flex-col p-3 gap-3  md:justify-center items-center relative overflow-hidden md:flex-wrap ">

<p className="mb-5 md:w-1/2 flex">At Produktivo, our enthusiasm and results-driven approach are matched by our extensive experience across various industry verticals. We understand that in today’s dynamic digital landscape, it’s not just about marketing; it’s also about robust digital systems and seamless integration. Continuous adaptation is key. Whether it's crafting a comprehensive digital strategy from scratch, enhancing your existing marketing efforts, or implementing efficient digital systems, Produktivo is dedicated to refreshing and optimizing your digital footprint for the best results possible.

</p>
<div className="w-full flex flex-col p-3 justify-center items-start gap-4 md:flex-row"><div className="w-full flex flex-col md:w-1/3 ">


<strong className="text-xl">WHY PARTNER WITH US? 

</strong>
<p className="mb-5 text-gray-400">Gain immediate access to our dedicated team, deeply immersed in the realms of digital marketing and system integration. Consider Produktivo as an integral extension of your business and marketing team. We are here to bridge any knowledge gaps, infuse our specialized skills into your endeavors, and drive enhanced outcomes for all your digital and marketing campaigns.


</p>

</div>


<div className="w-full h-72 md:w-1/3">

<img src="marketin2.jpg" alt=""  className="w-full h-full object-cover"/>


</div>
</div>



</section>

<section className=" spacegray flex flex-col p-5 justify-center items-center gap-3 md:w-1/2 md:float-left">


<strong className="text-xl text-yellow-400">Recognize Any of These Challenges ?

</strong>

<ul className="flex flex-col p-6 gap-1 text-white  md:flex-row md:flex-wrap md:w-full gap-6">



<li className="list-disc p-3md:w-30">In search of an all-encompassing marketing strategy that effectively spans across every channel and touchpoint.</li>
  <li className="list-disc p-3md:w-30">Facing challenges with a brand presence that’s not performing as expected on various marketing channels.</li>
  <li className="list-disc p-3md:w-30">Finding your brand a step behind in crucial search engine rankings.</li>
  <li className="list-disc p-3md:w-30">Struggling to convert website visitors into solid, qualified sales leads.</li>
  <li className="list-disc p-3md:w-30">Experiencing underwhelming returns on your inbound marketing efforts.</li>
  <li className="list-disc p-3md:w-30">Dealing with a marketing strategy that feels incomplete and lacks cohesion across essential channels and touchpoints.</li>
  <li className="list-disc p-3md:w-30">Need a robust system in place that enhances the overall customer experience and journey.</li>
  <li className="list-disc p-3md:w-30">Looking to retain clients through high-quality, reliable systems that ensure seamless interactions and transactions.</li>



</ul>

<p className="text-white">If any of these points hit home, Produktivo is ready to guide you toward solutions that not only address these issues but also elevate your brand’s digital impact.

</p>

</section>



<section className="  flex flex-col p-5 justify-center items-center gap-5 md:w-1/2 ">


<strong className="text-xl">SCHEDULE A CONSULTATION



</strong>



<p className="">At Produktivo, our consulting services span beyond traditional marketing, offering comprehensive, end-to-end solutions that integrate both marketing and system solutions. Whether it's refining your existing marketing efforts or building them from the ground up, we excel at enhancing every aspect of your strategy. Our focus is on crafting targeted marketing strategies that not only reach potential clients but also generate qualified leads and drive impactful conversions. Alongside this, we emphasize the importance of robust system solutions that streamline operations and enrich customer interactions, ensuring a seamless experience. We tailor your marketing programs, campaigns, and strategies to align perfectly with the unique aspects of your industry, your business, and your target audience, ensuring every initiative is as effective as it is efficient.


</p>

<p className="w-full text-gray-500">FREE / 30MINS
</p>

</section>


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



</>
        
        )
}

export default Consultation