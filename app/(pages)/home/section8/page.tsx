"use client"

import { useEffect } from 'react';
import Image from "next/image";
import Section81 from "../../../../public/assets/images/section-half-bg-1.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section8() {
  useEffect(() => {
          AOS.init();
        }, [])
  return (
    <section className="section-padding-primary">
    <div className="relative py-[60px]">
      <div className="absolute left-0 top-0 z-1 h-full w-full overflow-hidden bg-red-500 md:w-[56%] md:rounded-r-5">
      Section81
      <Image
          src={Section81}
          alt="contact section background image"
          loading="lazy" decoding="async" 
          className="object-cover"
          style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
          sizes="(min-width: 768px) 60vw, 100vw"
        />
      </div>
      <div className="container_container__az_fT">
        <div className="ml-auto md:w-1/2 pe-8">
          <div className="relative z-[2] rounded-5 p-10 shadow-1 bg-accent-700 lg:p-[60px]">
            <div className="mb-30px">
              <div className="text-left">
                <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
                  Talk to us
                </span>
                <h2 className="font-secondary text-xl font-bold leading-[1.25] text-white md:text-[3rem]">
                  Unleash the Power of Technology
                </h2>
              </div>
            </div>
            <form className="grid grid-cols-1 gap-x-[30px] gap-y-5 lg:grid-cols-2">
              <div>
                <div className="relative w-full">
                  <input
                    placeholder="Your Name"
                    type="text"
                    className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-solid border-body border-opacity-20 border-accent-200 focus:border-body focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 !pr-[44px]"
                    name="name"
                  />
                  <span className="absolute right-5 top-1/2 w-[14px] -translate-y-1/2 text-primary">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <div className="relative w-full">
                  <input
                    placeholder="Your Email"
                    type="email"
                    className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-solid border-body border-opacity-20 border-accent-200 focus:border-body focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 !pr-[44px]"
                    name="email"
                  />
                  <span className="absolute right-5 top-1/2 w-[14px] -translate-y-1/2 text-primary">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.9727 1.76172L13.2227 13.1094C13.1953 13.3828 13.0312 13.6289 12.7852 13.7656C12.6484 13.8203 12.5117 13.875 12.3477 13.875C12.2383 13.875 12.1289 13.8477 12.0195 13.793L8.68359 12.3984L7.28906 14.4766C7.17969 14.668 6.98828 14.75 6.79688 14.75C6.49609 14.75 6.25 14.5039 6.25 14.2031V11.5781C6.25 11.3594 6.30469 11.168 6.41406 11.0312L12.375 3.375L4.33594 10.6211L1.51953 9.44531C1.21875 9.30859 1 9.03516 1 8.67969C0.972656 8.29688 1.13672 8.02344 1.4375 7.85938L13.6875 0.886719C13.9609 0.722656 14.3438 0.722656 14.6172 0.914062C14.8906 1.10547 15.0273 1.43359 14.9727 1.76172Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative w-full">
                  <input
                    placeholder="Subject"
                    type="text"
                    className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-solid border-body border-opacity-20 border-accent-200 focus:border-body focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 !pr-[44px]"
                    name="subject"
                  />
                  <span className="absolute right-5 top-1/2 w-[14px] -translate-y-1/2 text-primary">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 391.78C-15.41 303.59-8 167.42 80.64 87.64s224.8-73 304.21 15.24 72 224.36-16.64 304.14c-18.74 16.87 64 43.09 42 52.26-82.06 34.21-253.91 35-346.23-67.5zm213.31-211.6l38.5-40.86c-9.61-8.89-32-26.83-76.17-27.6-52.33-.91-95.86 28.3-96.77 80-.2 11.33.29 36.72 29.42 54.83 34.46 21.42 86.52 21.51 86 52.26-.37 21.28-26.42 25.81-38.59 25.6-3-.05-30.23-.46-47.61-24.62l-40 42.61c28.16 27 59 32.62 83.49 33.05 10.23.18 96.42.33 97.84-81 .28-15.81-2.07-39.72-28.86-56.59-34.36-21.64-85-19.45-84.43-49.75.41-23.25 31-25.37 37.53-25.26.43 0 26.62.26 39.62 17.37z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="relative w-full">
                  <textarea
                    placeholder="Write Message..."
                    name="message"
                    className="flex items-center min-h-[3.5rem] w-full rounded-5 px-4 md:px-5 py-2 bg-transparent text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-solid border-body border-opacity-20  border-accent-200 focus:border-body focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 resize-none md:min-h-[130px] !pr-[44px]"
                  />
                  <span className="absolute right-5 top-[18px] w-[14px] text-primary">
                    <svg
                      width="14"
                      height="11"
                      viewBox="0 0 14 11"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.6875 0.5C13.3984 0.5 14 1.10156 14 1.8125C14 2.25 13.7812 2.63281 13.4531 2.87891L7.51953 7.33594C7.19141 7.58203 6.78125 7.58203 6.45312 7.33594L0.519531 2.87891C0.191406 2.63281 0 2.25 0 1.8125C0 1.10156 0.574219 0.5 1.3125 0.5H12.6875ZM5.93359 8.04688C6.5625 8.51172 7.41016 8.51172 8.03906 8.04688L14 3.5625V9.25C14 10.2344 13.207 11 12.25 11H1.75C0.765625 11 0 10.2344 0 9.25V3.5625L5.93359 8.04688Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="lg:col-span-2">
                <button
                  className="relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white hover:after:w-full hover:after:left-0 rounded-5 w-full"
                  type="submit"
                >
                  <span>SEND NOW</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>  
  );
}
