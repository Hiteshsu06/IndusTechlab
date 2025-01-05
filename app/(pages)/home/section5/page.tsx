"use client"

import { useEffect } from 'react';
import Image from "next/image";
import Section51 from "../../../../public/assets/images/section5-1.webp";
import Section52 from "../../../../public/assets/images/section5-2.webp";
import Section53 from "../../../../public/assets/images/section5-3.webp";
import Section54 from "../../../../public/assets/images/section5-4.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Section5() {
  useEffect(() => {
          AOS.init();
        }, [])
  return (
    <section className="section-padding-primary overflow-hidden">
      <div className="mx-auto max-w-[1762px] px-8">
        <div className="mx-auto max-w-[630px]">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="aos-init aos-animate"
          >
            <div className="text-center mb-10 md:mb-[3.75rem]">
              <span className="mb-[.625rem] block font-secondary text-base	 font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md">
                latest portfolio
              </span>
              <h2 className="font-secondary font-bold leading-[1.25] text-white text-[3rem]">
                Where Innovation Meets IT Excellence
              </h2>
            </div>
          </div>
        </div>
        <div className="grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            className="lg:mt-[70px] aos-init aos-animate"
          >
            <a
              target="_self"
              className="group/portfolio relative z-1 block aspect-[640/916] overflow-hidden rounded-5 p-6 md:p-[1.875rem]"
              href="/project/single"
            >
              <span className="absolute inset-0 z-[2] bg-gradient-1 from-primary/0 to-primary [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)] md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]"></span>
              <Image
                src={Section51}
                alt="1"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="pointer-events-none [transform:scale(1.05)] [transition:.9s_ease] group-hover/portfolio:[transform:scale(1)]"
                sizes="
                      (min-width:768px) 50vw, 
                      (min-width:1024px) 25vw,
                      100vw
                      "
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mt-auto divide-y md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100">
                  <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Cloud Migrate Pro
                    </span>
                  </h3>
                  <p className="mt-[13px] overflow-hidden pt-[11px] text-body">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Lorem Ipsum is simply dummy
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-0 aos-init aos-animate"
          >
            <a
              target="_self"
              className="group/portfolio relative z-1 block aspect-[640/916] overflow-hidden rounded-5 p-6 md:p-[1.875rem]"
              href="/project/single"
            >
              <span className="absolute inset-0 z-[2] bg-gradient-1 from-primary/0 to-primary [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)] md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]"></span>
              <Image
                src={Section52}
                alt="2"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="pointer-events-none [transform:scale(1.05)] [transition:.9s_ease] group-hover/portfolio:[transform:scale(1)]"
                sizes="
      (min-width:768px) 50vw, 
      (min-width:1024px) 25vw,
      100vw
      "
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mt-auto divide-y md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100">
                  <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Cloud Migrate Pro
                    </span>
                  </h3>
                  <p className="mt-[13px] overflow-hidden pt-[11px] text-body">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Lorem Ipsum is simply dummy
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            className="lg:mt-[70px] aos-init aos-animate"
          >
            <a
              target="_self"
              className="group/portfolio relative z-1 block aspect-[640/916] overflow-hidden rounded-5 p-6 md:p-[1.875rem]"
              href="/project/single"
            >
              <span className="absolute inset-0 z-[2] bg-gradient-1 from-primary/0 to-primary [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)] md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]"></span>
              <Image
                alt="3"
                src={Section53}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="pointer-events-none [transform:scale(1.05)] [transition:.9s_ease] group-hover/portfolio:[transform:scale(1)]"
                sizes="
    (min-width:768px) 50vw, 
    (min-width:1024px) 25vw,
    100vw
    "
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mt-auto divide-y md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100">
                  <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Cloud Migrate Pro
                    </span>
                  </h3>
                  <p className="mt-[13px] overflow-hidden pt-[11px] text-body">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Lorem Ipsum is simply dummy
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="650"
            className="mt-0 aos-init aos-animate"
          >
            <a
              target="_self"
              className="group/portfolio relative z-1 block aspect-[640/916] overflow-hidden rounded-5 p-6 md:p-[1.875rem]"
              href="/project/single"
            >
              <span className="absolute inset-0 z-[2] bg-gradient-1 from-primary/0 to-primary [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)] md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]"></span>
              <Image
                alt="4"
                src={Section54}
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="pointer-events-none [transform:scale(1.05)] [transition:.9s_ease] group-hover/portfolio:[transform:scale(1)]"
                sizes="
    (min-width:768px) 50vw, 
    (min-width:1024px) 25vw,
    100vw
    "
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mt-auto divide-y md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100">
                  <h3 className="overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Cloud Migrate Pro
                    </span>
                  </h3>
                  <p className="mt-[13px] overflow-hidden pt-[11px] text-body">
                    <span className="block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]">
                      Lorem Ipsum is simply dummy
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
