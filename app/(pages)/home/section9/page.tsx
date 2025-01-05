"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Section91 from "../../../../public/assets/images/blog-1.webp";
import Section92 from "../../../../public/assets/images/blog-2.webp";
import Section93 from "../../../../public/assets/images/blog-3.webp";

export default function Section9() {
    useEffect(() => {
            AOS.init();
          }, [])
  return (
    <section className="px-8 font-secondary section-padding-primary overflow-hidden bg-accent-700 [.light_&]:pt-0">
        <div className="container_container__az_fT">
          <div className="mx-auto max-w-[630px]">
            <div data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
              <div className="text-center mb-10 md:mb-[3.75rem]">
                <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
                  Our Blogs
                </span>
                <h2 className="font-secondary text-xl font-bold leading-[1.25] text-white md:text-[3rem]">
                  Transforming Challenges into Seamless Solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center gap-y-[30px]">
            <div data-aos="fade-up" data-aos-delay="200" className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3 aos-init aos-animate">
              <article className="group/blog relative z-1 flex h-full min-h-[452px] flex-col overflow-hidden rounded-5 p-6 md:p-[1.875rem]">
                <span className="absolute inset-0 z-[2] bg-accent-900/50"></span>
                <Image
                  src={Section91}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover opacity-0 [filter:blur(10px)] [transform:translatex(50%)_scalex(2)] [transition:all_500ms_ease] group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)] group-hover/blog:[transform:translatex(0)_scalex(1)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <Image
                  src={Section91}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover [transition:all_500ms_ease] group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)] group-hover/blog:[transform:translatex(-50%)_scalex(2)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div>
                    <div className="inline-grid min-h-[77px] min-w-[75px] items-center justify-center rounded-5 bg-accent-700 px-4 py-3 text-center font-secondary text-md font-bold text-white transition-colors group-hover/blog:bg-primary md:text-lg">
                      <span className="leading-none capitalize">30</span>
                      <span className="leading-none capitalize">May</span>
                    </div>
                  </div>
                  <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
                    <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                          </svg>
                        </span>
                        <span>By <a target="_self" className="transition-colors duration-300 hover:text-primary" href="">Admin</a></span>
                      </p>
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path>
                          </svg>
                        </span>
                        <span>Comments (05)</span>
                      </p>
                    </div>
                    <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                      <a target="_self" aria-label="We implement state-of-the-art encryption" className="text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        We implement state-of-the-art encryption
                      </a>
                    </h3>
                    <div>
                      <a target="_self" className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        <span>Read More</span>
                        <span className="text-primary">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-32 32c-12.5 12.5-12.5 32.8 0 45.3l82.7 82.7H112c-17.7 0-32 14.3-32 32s14.3 32 32 32h268.6l-82.7 82.7c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l160-160z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3 aos-init aos-animate">
              <article className="group/blog relative z-1 flex h-full min-h-[452px] flex-col overflow-hidden rounded-5 p-6 md:p-[1.875rem]">
                <span className="absolute inset-0 z-[2] bg-accent-900/50"></span>
                <Image
                  src={Section92}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover opacity-0 [filter:blur(10px)] [transform:translatex(50%)_scalex(2)] [transition:all_500ms_ease] group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)] group-hover/blog:[transform:translatex(0)_scalex(1)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <Image
                  src={Section92}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover [transition:all_500ms_ease] group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)] group-hover/blog:[transform:translatex(-50%)_scalex(2)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div>
                    <div className="inline-grid min-h-[77px] min-w-[75px] items-center justify-center rounded-5 bg-accent-700 px-4 py-3 text-center font-secondary text-md font-bold text-white transition-colors group-hover/blog:bg-primary md:text-lg">
                      <span className="leading-none capitalize">30</span>
                      <span className="leading-none capitalize">May</span>
                    </div>
                  </div>
                  <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
                    <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                          </svg>
                        </span>
                        <span>By <a target="_self" className="transition-colors duration-300 hover:text-primary" href="">Admin</a></span>
                      </p>
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path>
                          </svg>
                        </span>
                        <span>Comments (05)</span>
                      </p>
                    </div>
                    <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                      <a target="_self" aria-label="We implement state-of-the-art encryption" className="text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        We implement state-of-the-art encryption
                      </a>
                    </h3>
                    <div>
                      <a target="_self" className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        <span>Read More</span>
                        <span className="text-primary">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-32 32c-12.5 12.5-12.5 32.8 0 45.3l82.7 82.7H112c-17.7 0-32 14.3-32 32s14.3 32 32 32h268.6l-82.7 82.7c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l160-160z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3 aos-init aos-animate">
              <article className="group/blog relative z-1 flex h-full min-h-[452px] flex-col overflow-hidden rounded-5 p-6 md:p-[1.875rem]">
                <span className="absolute inset-0 z-[2] bg-accent-900/50"></span>
                <Image
                  src={Section93}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover opacity-0 [filter:blur(10px)] [transform:translatex(50%)_scalex(2)] [transition:all_500ms_ease] group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)] group-hover/blog:[transform:translatex(0)_scalex(1)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <Image
                  src={Section93}
                  alt="We implement state-of-the-art encryption"
                  loading="lazy" decoding="async" 
                  className="pointer-events-none object-cover [transition:all_500ms_ease] group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)] group-hover/blog:[transform:translatex(-50%)_scalex(2)]"
                  style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }}
                  sizes="(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw"
                />
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div>
                    <div className="inline-grid min-h-[77px] min-w-[75px] items-center justify-center rounded-5 bg-accent-700 px-4 py-3 text-center font-secondary text-md font-bold text-white transition-colors group-hover/blog:bg-primary md:text-lg">
                      <span className="leading-none capitalize">30</span>
                      <span className="leading-none capitalize">May</span>
                    </div>
                  </div>
                  <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
                    <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2">
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                          </svg>
                        </span>
                        <span>By <a target="_self" className="transition-colors duration-300 hover:text-primary" href="">Admin</a></span>
                      </p>
                      <p className="inline-flex items-center gap-2 text-white">
                        <span className="text-sm text-white">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path>
                          </svg>
                        </span>
                        <span>Comments (05)</span>
                      </p>
                    </div>
                    <h3 className="text-md font-bold leading-[1.25] md:text-lg">
                      <a target="_self" aria-label="We implement state-of-the-art encryption" className="text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        We implement state-of-the-art encryption
                      </a>
                    </h3>
                    <div>
                      <a target="_self" className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300 hover:text-primary" href="/blog/single">
                        <span>Read More</span>
                        <span className="text-primary">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-32 32c-12.5 12.5-12.5 32.8 0 45.3l82.7 82.7H112c-17.7 0-32 14.3-32 32s14.3 32 32 32h268.6l-82.7 82.7c-12.5 12.5-12.5 32.8 0 45.3l32 32c12.5 12.5 32.8 12.5 45.3 0l160-160z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
    </section>
  );
}
