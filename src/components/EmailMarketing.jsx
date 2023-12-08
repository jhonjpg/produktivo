





import React from 'react'
import { Link } from 'react-router-dom'


const EmailMarketing = () => {
  return (

    <>
    <section  className=" homec w-screen h-screen flex  justify-center items-center relative overflow-hidden">
      
    <div id="home" className="absolute z-10"></div>
    
    <div className="relative  z-30 bottom-20 text-white flex flex-col justify-center items-center text-white gap-5 p-2">
     <strong className="w-full text-center text-4xl font-black mb-5	">Email Marketing</strong>


<p className="text-sm">Powerful and personalized marketing services tailored to your business.


</p>

 </div>
 
    
        </section>
        

<section className="flex flex-col p-3 gap-3">

<strong className="mb-5 ">Engaging Content: Captivate and Connect with Your Audience 
</strong>


<p>At Produktivo, we believe in the power of high-value content to attract and engage your target audience effectively, driving your business forward. Consistently providing valuable, relevant information fosters brand loyalty and propels business growth.

</p>

<strong className="mb-5 ">Brand Image Enhancement 

 
</strong>


<p>By regularly releasing top-quality content, your brand can establish itself as an industry thought leader, significantly strengthening your corporate identity and market presence.


</p>


<strong className="mb-5 ">Expanding Your Reach 

 
</strong>


<p>High-quality content, especially on current or trending topics, has the potential to go viral on social networks. Leveraging this trend, Produktivo can help elevate your brand's visibility and broaden its reach.


</p>


<strong className="mb-5 ">Boosting Lead Generation 


</strong>


<p>Impressive content not only engages but also encourages customers to share their contact information, driven by interest in your products or eagerness for more insightful content. Produktivo strategically crafts content to maximize lead generation, converting interest into actionable business opportunities.


</p>


</section>

<section className=" spacegray flex flex-col p-5 justify-center items-center gap-3 ">


<strong className="text-xl text-yellow-400">We've work with a leading email marketing platform

</strong>


<ol className="flex flex-col p-6 gap-1 text-black w-full">



<li className="list-disc p-3 text-white">Active Campaign

</li>
<li className="list-disc p-3 text-white">Mailchimp


</li>

<li className="list-disc p-3 text-white">ConstantContact



</li>


<li className="list-disc p-3 text-white">Mailerlite



</li>


</ol>


</section>



<section className="  flex flex-col p-5 justify-center items-center gap-5">



<strong>	A full campaign management service from design to implementation.</strong>


<p>Once we have defined and setup your strategy, we can also manage your campaigns with our Email Marketing specialists, with the platform of your choice, saving you time and ensuring the greatest ROI to your campaigns.

</p>


</section>





<section className="   flex flex-col p-5 justify-center items-center gap-6">


<strong className="text-2xl ">Take Action


</strong>

<Link to="https://portal.weareproduktivo.com/public/appointment-scheduler/656a34b28b362056dffe942e/schedule"> <button className="w-64 rounded-lg p-2 bg-blue-400 text-white text-lg hover:bg-blue-300"> Book a call

</button>
</Link>

<p> <strong>We’d love to hear from you!</strong>  Save a slot, and jump on a quick zoom call to get some advice on your next steps to success.</p>



</section>




<section className="   flex flex-col p-5 justify-center items-center gap-3">

<strong className="text-xl">	Comprehensive reporting on your Client Dashboard
</strong>


<ol className="flex flex-col p-6 gap-1 text-black w-full">







<li className=" p-3">Access all your files
</li>
<li className=" p-3">Access email marketing

</li>

<li className=" p-3">Review social media content


</li><li className=" p-3">Review marketing analytics


</li><li className=" p-3">Review all proposals


</li><li className=" p-3">Review and pay invoices


</li>


</ol>




</section>


</>
        
        )
}

export default EmailMarketing