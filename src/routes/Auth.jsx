import React, { useReducer, useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import ScrollTop from '../helper/ScrollTop';
import Navbar from '../components/Navbar';
import PageNotFound from '../pages/PageNotFound';
import Contact from '../pages/Contact';
// import About from '../Pages/About';
import Footer from '../pages/Footer';
import Consultation from '../pages/Consultation';
import VirtualBusinessSupport from '../pages/VirtualBusinessSupport';
import SystemImplementations from '../pages/SystemImplementations';
import ContentMarketing from '../components/ContentMarketing';
import EmailMarketing from '../components/EmailMarketing';
import DigitalAds from '../components/DigitalAds';
import SocialMedia from '../pages/SocialMedia';
import LeadGeneration from '../components/LeadGeneration';
import CookiePolicies from '../components/CookiePolicies';
import PrivacyPolicy from '../components/PrivacyPolicy';
import { Blog } from '../pages/Blog';


const Auth = () => {



  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar
      />


      <Routes>
        <Route index element={<Home  />} />
        <Route path="/produktivo" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}
       
        <Route path="produktivo/consultation" element={<Consultation />} />
        <Route path="produktivo/virtual&business&support" element={<VirtualBusinessSupport />} />
        <Route path="produktivo/system&implementation" element={<SystemImplementations />} />
        <Route path="produktivo/content&marketing" element={<ContentMarketing />} />
        <Route path="produktivo/email&marketing" element={<EmailMarketing />} />
        <Route path="produktivo/digital&ads" element={<DigitalAds />} />
        <Route path="produktivo/lead&generation" element={<LeadGeneration />} />

        <Route path="produktivo/social&media" element={<SocialMedia />} />


        <Route path="produktivo/cookie&pilicies" element={<CookiePolicies />} />
        <Route path="produktivo/privacy&policy" element={<PrivacyPolicy />} />








        <Route path="produktivo/blog" element={<Blog />} />
        <Route path="produktivo/contact" element={<Contact />} />

     
        <Route path="*" element={<PageNotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default Auth;
