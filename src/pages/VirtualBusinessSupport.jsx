import React from 'react'
import { Parallax, Background } from 'react-parallax';
import Shapes from '../components/Shapes';


const VirtualBusinessSupport = () => {
  return (

    <>
    <section  className=" homec w-screen h-screen flex  justify-center items-center relative overflow-hidden">
      
    <div id="home" className="absolute z-10"></div>
    
    <div className="relative  z-30 bottom-20 text-white flex flex-col justify-center items-center text-white gap-5 p-2">
     <strong className="w-full text-center text-4xl font-black mb-5	">Virtual Business Support</strong>



 </div>
    
  
    
        </section>




<section className="flex flex-col p-3 gap-3  md:justify-center items-center relative overflow-hidden ">

<p className="mb-5 md:w-1/2 flex  z-20">In today's fast-paced business world, staying ahead means more than just managing your day-to-day operations. It requires a strategic approach to handling your administrative tasks, systems, and processes. Produktivo's Virtual Business Support is designed to provide you with precisely that – a seamless, efficient, and flexible solution to streamline your business operations.


</p>

<strong className="text-xl z-20">Why Trust Us With Your Business?
</strong>

<p className=" text-gray-700 z-20">Efficiency and productivity are at the heart of every successful business. With Produktivo's Virtual Business Support, you can:
</p>


<ul className="flex flex-col p-6 gap-1 text-black z-20">



<li className="list-disc p-3"><strong> Focus on Growth:</strong>  Redirect your energy and resources towards core business activities, while we handle the complexities of your day-to-day operations.</li>
<li className="list-disc p-3"><strong> Customized Support:</strong>  Our services are tailored to meet your unique business needs, whether it's for a one-off project or ongoing operational support.</li>
<li className="list-disc p-3"><strong> Scalability:</strong> As your business grows, our support flexibly adapts to your changing needs, ensuring you always have the right level of assistance.</li>


</ul>



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



<section className=" spacegray flex flex-col p-5 justify-center items-start gap-3 md:flex-row  flex-wrap ">


<strong className=" w-full text-xl text-yellow-400">Our Services:
</strong>


<ol className="flex flex-col p-6 gap-1 text-white ">

<strong className="text-lg"> Administrative Assistance:</strong> 

<li className="list-disc p-3"> Calendar and Inbox Management.</li>
<li className="list-disc p-3"> Document Preparation and Management</li>
<li className="list-disc p-3"> Data Entry and Database Management</li>


</ol>


<ol className="flex flex-col p-6 gap-1 text-white">

<strong className="text-lg"> Client Relationship Management:</strong> 


<li className="list-disc p-3"> Lead Handling and Follow-Ups</li>
<li className="list-disc p-3"> Client Communication and Correspondence</li>
<li className="list-disc p-3"> Feedback Collection and Analysis</li>
<li className="list-disc p-3"> CRM Implementation and Management</li>
<li className="list-disc p-3"> Project Management Tools Set-Up</li>
<li className="list-disc p-3"> Workflow Optimization</li>






</ol>


<ol className="flex flex-col p-6 gap-1 text-white ">

<strong className="text-lg"> Financial Administration:</strong> 


<li className="list-disc p-3"> Invoicing and Payment Tracking</li>
<li className="list-disc p-3"> Expense Management</li>
</ol>


<strong className="text-lg text-white md:w-full text-center">And so much more !
</strong>

</section>



<section className="flex flex-col p-5 justify-center items-center gap-3 ">


<strong className="text-xl ">The Produktivo Advantage:
</strong>


<ul className="flex flex-col p-6 gap-1 text-black">



<li className="list-disc p-3"><strong> Skilled Team: </strong>  Our team of virtual assistants is equipped with the skills and knowledge to handle a variety of business tasks efficiently</li>
<li className="list-disc p-3"><strong> Technology-Driven:</strong>  We leverage the latest tools and technologies to ensure smooth and efficient management of your business operations.</li>
<li className="list-disc p-3"><strong> Security and Confidentiality:</strong> Your business information is handled with the utmost confidentiality and security.</li>


</ul>


<strong className="text-lg ">Ready to Transform Your Business Operations?</strong>

<p>Let Produktivo's Virtual Business Support be your solution to a more organized, efficient, and productive business. Contact us today to discuss how we can tailor our services to your specific needs.

</p>
</section>



</>
        
        )
}

export default VirtualBusinessSupport


