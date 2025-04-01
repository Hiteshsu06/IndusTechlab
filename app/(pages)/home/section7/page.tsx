"use client";
import { useState, useEffect } from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section71 from "../../../../public/assets/images/person-1.webp";
import Section72 from "../../../../public/assets/images/person-2.webp";
import Section73 from "../../../../public/assets/images/person-11.webp";
import Section74 from "../../../../public/assets/images/person-12.webp";
import Section75 from "../../../../public/assets/images/person-13.webp";
import Section76 from "../../../../public/assets/images/person-14.webp";

export default function Section7() {
  useEffect(() => {
          AOS.init();
        }, [])
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2,
      spacing: 30
    },
    loop: true,
    // slideChanged(slider) {
    //   setCurrentSlide(slider.track.details.rel)
    // }
  })

  return (
    <section className="section-padding-primary overflow-hidden px-8 text-body text-base">
      <div className="container_container__az_fT">
        <div className="mb-10 mr-30px max-w-[680px] md:mb-[3.75rem] md:pr-[140px]">
          <div className="text-left">
            <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
              Clients testimonial
            </span>
            <h2 className="font-secondary text-[3rem] font-bold leading-[1.25] text-white">
              Your IT Partner for a Dynamic Future
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col">
            <div ref={sliderRef} className="keen-slider max-md:order-2 font-secondary">
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1310px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                      <Image
                          src={Section71}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        Jane Cooper
                      </h3>
                      <p className="mt-1">Team Leader</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>☆</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1280px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                      <Image
                          src={Section72}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        Robert Fox
                      </h3>
                      <p className="mt-1">Software Development Manager</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1250px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                      <Image
                          src={Section73}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        April Cabrera
                      </h3>
                      <p className="mt-1">Team Leader</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>☆</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1220px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                       <Image
                          src={Section74}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        Kevin Martin
                      </h3>
                      <p className="mt-1">Software Development Manager</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1190px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                        <Image
                          src={Section75}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        Jada Christian
                      </h3>
                      <p className="mt-1">Team Leader</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>☆</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="keen-slider__slide !overflow-visible"
                style={{
                  minWidth: "625px",
                  maxWidth: "625px",
                  transform: "translate3d(-1160px, 0px, 0px)",
                }}
              >
                <div className="h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] bg-accent-700 sm:p-[50px]">
                  <div className="flex flex-col gap-12 md:flex-row md:gap-5">
                    <div className="relative max-w-max flex-none">
                      <Image
                          src={Section76}
                          alt="Robert Fox"
                          loading="lazy"
                          width="180"
                          height="180"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-5 object-cover mix-blend-luminosity"
                          style={{ color: "transparent" }}
                        />
                      <span className="absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path>
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-md font-bold leading-[1.25] text-white md:text-lg">
                        Kevin Deen
                      </h3>
                      <p className="mt-1">Software Development Manager</p>
                      <div className="mt-2 min-h-[30px] text-primary">
                        <div className="flex gap-1">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                        </div>
                      </div>
                      <p className="mt-5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 max-md:order-1 max-md:mb-8 md:absolute md:right-0 md:top-[-136px] md:justify-center">
              <div
               onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev() }        
               className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] transition-colors md:h-[60px] md:w-[60px] left-10 bg-primary-light/10 text-primary-light hover:text-white hover:bg-primary-light">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path>
                </svg>
              </div>
              <div 
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[1rem] transition-colors md:h-[60px] md:w-[60px] right-10 bg-primary-light/10 text-primary-light hover:text-white hover:bg-primary-light">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
