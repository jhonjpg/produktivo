


import React from 'react'
import { Link } from 'react-router-dom'


const DigitalAds = () => {
  return (

    <>
    <section  className=" homec w-screen h-screen flex  justify-center items-center relative overflow-hidden">
      
    <div id="home" className="absolute z-10"></div>
    
    <div className="relative  z-30 bottom-20 text-white flex flex-col justify-center items-center text-white gap-5 p-2">
     <strong className="w-full text-center text-4xl font-black mb-5	">Digital Ads</strong>


<p className="text-sm">Attract more customers and retain the ones you have.
</p>

 </div>
 
    
        </section>
        

<section className="flex flex-col p-4 gap-3">

<div className="w-full">

<strong className="mb-5 ">DIGITAL MARKETING SOLUTIONS 
</strong>


<p> A Key Strategy for Attracting and Retaining Customers

Whether you aim to boost website traffic, amplify conversions, or achieve success across social media channels, our team of digital marketing experts stands ready to assist. We specialize in crafting strategies that not only capture the attention of your target audience but also engage and retain them effectively.
</p>    


<div className="w-full h-52 scale-105"><img src="ad.png" className="w-full  h-full object-contain" alt="" /></div>

</div>

<p className="text-xs">FACEBOOK & INSTAGRAM ADS
</p>


</section>

<section className=" spacegray flex flex-col p-5 justify-center items-center gap-3 ">


<div className="w-full flex flex-col gap-6 text-white">
<strong className="text-xl text-yellow-400">Harness the power of Facebook & Instagram with highly-targeted ads.
</strong>

<p>When it comes to building a strong online presence, your business has to be where your customers are, and today there are approximately 3.5 billion people using social media. Our team can help you increase website traffic, drive more conversions, and succeed on social media through targeted campaigns on Facebook and Instagram.

</p>


<strong>PRECISE TARGETING

</strong>


<p>You can build your target audience with digital ads based on demographics, interests, location, relationship status, education, household income, and life events.

</p>

<strong className="text-gray-50">EXPAND YOUR REACH

</strong>

<p>Social media is becoming a pay-to-play field, which means that businesses need to combine organic and paid efforts to achieve desired results.

</p>

<p className="text-xs">GOOGLE ADS
</p>
</div>



<div className="w-full flex flex-col gap-6 text-white">
<strong className="text-xl text-yellow-400">Advertise on search engines to drive conversions to your business.
</strong>

<p>Google is the world's most popular search engine: It processes an impressive average of 63,000 searches per second every day. A significant portion of these searches come from people who need services or want to buy something. We’ll make sure they’ll find your business online.


</p>


<strong>IMPROVED ROI



</strong>


<p>Paid search advertising is very cost-effective because we target potential customers who are more likely to convert and generate sales.


</p>

<strong>EXPAND YOUR REACH

</strong>

<p>Social media is becoming a pay-to-play field, which means that businesses need to combine organic and paid efforts to achieve desired results.

</p>

<strong>TRUST THE EXPERTS



</strong>

<p>Our team will carefully choose relevant keywords to display your ads only to people actively looking for your products or services.


</p>

<p className="text-xs">YOUTUBE ADS

</p>
</div>



<div className="w-full flex flex-col gap-6 text-white">
<strong className="text-xl text-yellow-400">Reach your target audience with video ads on YouTube.
</strong>

<p>YouTube is one of the top providers of media in the world! Take advantage of that tremendous reach with YouTube advertising and get your business the exposure you need to thrive in your competitive markets. Our team will ensure you’re targeting the right audience for your business.



</p>


<strong>WHY CHOOSE YOUTUBE?





</strong>


<p>YouTube is both a search engine and a social media platform. You can target potential customers who are either ready to buy or willing to interact with your brand.



</p>

<strong>TARGETING OPTIONS



</strong>

<p>We can deliver our digital ads to consumers based on specific demographics, interests, searched keywords, or even YouTube channels that your audience likes to watch.


</p>

</div>


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

export default DigitalAds