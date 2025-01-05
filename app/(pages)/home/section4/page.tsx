"use client"

import { useEffect } from 'react';
import Image from "next/image";
import Pattern2 from '../../../../public/assets/images/pattern-2.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section4() {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <section className="px-8">
      <div className='relative overflow-hidden rounded-5 bg-primary py-14'>
        <div className='relative z-10 mx-auto max-w-[630px] rounded-5  text-center'>
          <h2 className='mx-auto max-w-[490px] font-secondary text-xl font-bold capitalize leading-[1.25] text-white md:text-[3rem]'>Have question? Feel Free To Ask</h2>
          <form className='mt-6 flex flex-col items-center justify-center gap-[.625rem] md:mt-[1.875rem] md:flex-row'>
            <div className='relative w-full'>
              <input type="text" placeholder='Enter Email'  className='flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent border border-solid focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 border-white border-opacity-60 text-white placeholder:text-white focus:border-white'/>
            </div>
            <button className='relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded min-w-[190px] flex-none  max-md:w-full bg-primary-light hover:bg-white hover:text-accent-700' type="submit"><span>SUSCRIBE</span></button>
          </form>
        </div>
        <Image
          src={Pattern2}
          alt="pattern 2"
          width={520}
          height={316}
          loading="lazy"
          className='pointer-events-none absolute right-[30px] bottom-0 z-1 h-full animate-float-bob-x object-cover opacity-60'
        />
      </div>
    </section>
  );
}