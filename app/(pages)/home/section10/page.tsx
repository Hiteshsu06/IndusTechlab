"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import About5 from '../../../../public/assets/images/about-5.webp';

export default function Section10() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="section-padding-primary overflow-hidden px-8 text-body">
      <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
        <div className="lg:w-1/2 aos-init aos-animate">
          <div className="text-left">
            <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
              About Us
            </span>
            <h2 className="font-secondary font-bold leading-[1.25] text-white text-[3rem]">
              Sculpting Digital Landscapes
            </h2>
            <p className="mt-5 whitespace-pre-line">
              Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus
              volutpat, sodales purus. Nunc quis an mauris et eros vulputate
              mattis Nulla vitae ex nunc. Morbi quis purus convallis, fermentum
              metus the volutpatquis purus convallis
            </p>
          </div>
          <ul className="mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2">
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
            <li className="flex items-center gap-3 lg:gap-4">
              <span className="text-lg text-primary">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                </svg>
              </span>
              <span className="block font-secondary text-md font-bold leading-[1.5] text-white">
                Mistakes To Avoid
              </span>
            </li>
          </ul>
        </div>
        <div className="lg:w-[45%]">
          <div
            className="group relative z-1 mx-auto aos-init aos-animate"
            data-aos="fade-up-left"
            data-aos-delay="400"
          >
            <div data-testid="video-player" className="inline-grid">
              <div
                data-testid="media-wrapper"
                className="z-10 cursor-pointer relative inline-flex overflow-hidden rounded-5 after:pointer-events-none after:absolute after:left-0 after:top-0 after:h-0 after:w-full after:bg-white/30 after:opacity-100 hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear"
              >
                <span className="absolute inset-0 z-1 hidden"></span>
                <Image 
                  src={About5}
                  className="block object-cover"
                  sizes="100vw"
                  loading="lazy"
                  width="640"
                  height="678"
                  style={{ color: "transparent" }}
                  alt="about image five"
                />
                <span className="cursor-pointer absolute left-1/2 top-1/2 z-10 inline-block -translate-x-1/2 -translate-y-1/2">
                  <span className="w-[100px] h-[100px] rounded-5 bg-primary grid place-items-center duration-350 text-white hover:bg-black transition-all text-[2.5rem] md:text-[6.25rem] relative after:absolute after:inset-0 after:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] after:[animation-delay:.6s] after:transition-all after:animate-ripple after:rounded-[inherit] before:absolute before:inset-0 before:[box-shadow:0_0_0_0_rgb(255_255_255/60%)] before:transition-all before:animate-ripple before:rounded-[inherit]">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.82617 0.546509L15.0762 7.42151C15.623 7.77307 15.9746 8.39807 15.9746 9.02307C15.9746 9.68713 15.623 10.3121 15.0762 10.6246L3.82617 17.4996C3.24023 17.8512 2.49805 17.8903 1.91211 17.5387C1.32617 17.2262 0.974609 16.6012 0.974609 15.8981V2.14807C0.974609 1.48401 1.32617 0.859009 1.91211 0.546509C2.49805 0.194946 3.24023 0.194946 3.82617 0.546509Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <div className="absolute left-0 top-0 -z-1 h-full w-full rotate-3 rounded-5 bg-primary transition-transform duration-350 group-hover:rotate-[2deg] md:rotate-[5deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
