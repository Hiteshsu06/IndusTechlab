"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section1 from "./section1/page";
import Section2 from "./section2/page";
import Section3 from "./section3/page";
import Section4 from "./section4/page";
import Section5 from "./section5/page";
import Section6 from "./section6/page";
import Section7 from "./section7/page";
import Section8 from "./section8/page";
import Section9 from "./section9/page";
import Footer from "./footer/page";
import Header from "./header/page";

export default function Home() {
   useEffect(() => {
      AOS.init();
    }, [])
  return (
   <section className="bg-base">
      <Header/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Footer/>
   </section>
  );
}
