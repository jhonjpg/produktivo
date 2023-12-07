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


const Auth = () => {



  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar
      />


      <Routes>
        <Route index element={<Home  />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="/about" element={<About />} /> */}
       
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/virtual&business&support" element={<VirtualBusinessSupport />} />
        <Route path="/system&implementation" element={<SystemImplementations />} />
        <Route path="/content&marketing" element={<ContentMarketing />} />
        <Route path="/email&marketing" element={<EmailMarketing />} />
        <Route path="/digital&ads" element={<DigitalAds />} />
        <Route path="/lead&generation" element={<LeadGeneration />} />

        <Route path="/social&media" element={<SocialMedia />} />


        <Route path="/cookie&pilicies" element={<CookiePolicies />} />
        <Route path="/privacy&policy" element={<PrivacyPolicy />} />












        <Route path="/contact" element={<Contact />} />

     
        <Route path="*" element={<PageNotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default Auth;
