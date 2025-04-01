import Blog4 from '../../../../public/assets/images/blog-4.webp';
import Blog5 from '../../../../public/assets/images/blog-5.webp';
import Blog6 from '../../../../public/assets/images/blog-6.webp';
import Blog7 from '../../../../public/assets/images/blog-7.webp';
import Image from 'next/image';

export default function Section16() {
  return (
    <section>
      <div className='text-body px-8'>
        <div className="grid gap-[30px] lg:grid-cols-[1fr_410px]">
          <div>
            <div className="grid gap-10 lg:gap-20">
              <article className="group">
                <figure className="relative rounded z-1 overflow-hidden after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear">
                  <Image 
                    src={Blog4}
                    alt="Pioneering Progress, One Algorithm at a Time"
                    width="850"
                    height="575"
                    sizes="100vw"
                    className='rounded'
                    style={{ color: "transparent" }}
                  />
                </figure>
                <ul
                  aria-label="blog meta list"
                  className="mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px"
                >
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                      </svg>
                    </span>
                    <span>
                      By{" "}
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        admin
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href="#"
                    >
                      Category
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path>
                      </svg>
                    </span>
                    <span>
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        Comments (05)
                      </a>
                    </span>
                  </li>
                </ul>
                <h3 className="font-secondary text-lg font-bold leading-[1.25] text-white md:text-xl">
                  <a
                    target="_self"
                    className="transition-colors duration-400 ease-in-out text-white hover:text-primary"
                    href="/blog/single"
                  >
                    Pioneering Progress, One Algorithm at a Time
                  </a>
                </h3>
                <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                <p>
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere lobortis non,
                  viverra laoreet augue mattis start fermentum ullamcor viverra
                  laoreet By Admin . Creativity . 28th February 2022 . Leave a
                  comment viverra laoreet augue mattis start fermentum{" "}
                </p>
                <a
                  target="_self"
                  className="relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 mt-6 border border-primary bg-transparent rounded hover:text-primary lg:mt-30px after:hidden"
                  href="/blog/single"
                >
                  <span className="relative z-1">Read More</span>
                  <span className="relative top-[-2px] z-1 text-sm/[1] text-primary transition-colors duration-300">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z"></path>
                    </svg>
                  </span>
                </a>
              </article>
              <article className="group">
                <figure className="relative rounded z-1 overflow-hidden after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear">
                <Image 
                    src={Blog6}
                    alt="Empowering Businesses with Tech Synergy"
                    width="850"
                    height="575"
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
                    style={{ color: "transparent" }}
                />
                </figure>
                <ul
                  aria-label="blog meta list"
                  className="mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px"
                >
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                      </svg>
                    </span>
                    <span>
                      By{" "}
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        admin
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href="#"
                    >
                      Category
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path>
                      </svg>
                    </span>
                    <span>
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        Comments (05)
                      </a>
                    </span>
                  </li>
                </ul>
                <h3 className="font-secondary font-bold leading-[1.25] text-white text-[2rem]">
                  <a
                    target="_self"
                    className="transition-colors duration-400 ease-in-out text-white hover:text-primary"
                    href="/blog/single"
                  >
                    Empowering Businesses with Tech Synergy
                  </a>
                </h3>
                <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                <p>
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere lobortis non,
                  viverra laoreet augue mattis start fermentum ullamcor viverra
                  laoreet By Admin . Creativity . 28th February 2022 . Leave a
                  comment viverra laoreet augue mattis start fermentum{" "}
                </p>
                <a
                  target="_self"
                  className="relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 mt-6 border border-primary bg-transparent hover:text-primary lg:mt-30px after:hidden"
                  href="/blog/single"
                >
                  <span className="relative z-1">Read More</span>
                  <span className="relative top-[-2px] z-1 text-sm/[1] text-primary transition-colors duration-300">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z"></path>
                    </svg>
                  </span>
                </a>
              </article>
              <article className="group">
                <figure className="relative rounded z-1 overflow-hidden after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100 group-hover:transition-all group-hover:after:h-full group-hover:after:opacity-0 group-hover:after:duration-400 group-hover:after:ease-linear">
                  <Image 
                    src={Blog7}
                    alt="Unleashing Potential through IT Excellence"
                    width="850"
                    height="575"
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 [transform:scale(1.05)] group-hover:[transform:scale(1)]"
                    style={{ color: "transparent" }}
                    />
                </figure>
                <ul
                  aria-label="blog meta list"
                  className="mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px"
                >
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
                      </svg>
                    </span>
                    <span>
                      By{" "}
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        admin
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M384 480h48c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224H144c-11.4 0-21.9 6-27.6 15.9L48 357.1V96c0-8.8 7.2-16 16-16H181.5c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8H416c8.8 0 16 7.2 16 16v32h48V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H87.7 384z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href="#"
                    >
                      Category
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm text-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"></path>
                      </svg>
                    </span>
                    <span>
                      <a
                        target="_self"
                        className="transition-colors duration-400 hover:text-primary ease-in-out"
                        href="#"
                      >
                        Comments (05)
                      </a>
                    </span>
                  </li>
                </ul>
                <h3 className="font-secondary font-bold leading-[1.25] text-white text-[2rem]">
                  <a
                    target="_self"
                    className="transition-colors duration-400 ease-in-out text-white hover:text-primary"
                    href="/blog/single"
                  >
                    Unleashing Potential through IT Excellence
                  </a>
                </h3>
                <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                <p>
                  Aliquam eros justo, posuere loborti viverra lao ullamcorper
                  posuere viverra .Aliquam eros justo, posuere lobortis non,
                  viverra laoreet augue mattis start fermentum ullamcor viverra
                  laoreet By Admin . Creativity . 28th February 2022 . Leave a
                  comment viverra laoreet augue mattis start fermentum{" "}
                </p>
                <a
                  target="_self"
                  className="relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 mt-6 border border-primary bg-transparent hover:text-primary lg:mt-30px after:hidden"
                  href="/blog/single"
                >
                  <span className="relative z-1">Read More</span>
                  <span className="relative top-[-2px] z-1 text-sm/[1] text-primary transition-colors duration-300">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.8125 5.75C11.8125 6.24219 11.4023 6.65234 10.9375 6.65234H7V10.5898C7 11.0547 6.58984 11.4375 6.125 11.4375C5.63281 11.4375 5.25 11.0547 5.25 10.5898V6.65234H1.3125C0.820312 6.65234 0.4375 6.24219 0.4375 5.75C0.4375 5.28516 0.820312 4.90234 1.3125 4.90234H5.25V0.964844C5.25 0.472656 5.63281 0.0625 6.125 0.0625C6.58984 0.0625 7 0.472656 7 0.964844V4.90234H10.9375C11.4023 4.875 11.8125 5.28516 11.8125 5.75Z"></path>
                    </svg>
                  </span>
                </a>
              </article>
            </div>
          </div>
          <div className="grid gap-30px self-baseline max-md:mx-auto max-md:max-w-[410px] lg:gap-10">
            <div className="space-y-5 rounded bg-accent-100 p-8 text-center bg-accent-700 lg:p-10">
            <Image 
                src={Blog5}
                alt="author image 1"
                width="127"
                height="127"
                sizes="100vw"
                className="mx-auto rounded-full object-cover"
                style={{ color: "transparent" }}
                />
              <h3 className="font-secondary text-lg font-bold leading-[1.25] text-white md:text-xl">
                Naturials paul
              </h3>
              <p>
                Aliquam eros justo, posuere lobort viverra lao ullamcorper
                posuere viverra .Aliquam eros justo, posuere lobortis non
              </p>
              <nav aria-label="social links">
                <ul className="inline-flex items-center divide-x divide-accent-800/50 divide-accent-100/50 text-white">
                  <li>
                    <a
                      target="_blank"
                      className="block text-white px-4 text-base/[1.75]  transition-transform duration-350 hover:-translate-y-1 hover:text-primary"
                      href="https://www.facebook.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 320 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="block text-white px-4 text-base/[1.75]  transition-transform duration-350 hover:-translate-y-1 hover:text-primary"
                      href="https://twitter.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      className="block px-4 text-white  text-base/[1.75]  transition-transform duration-350 hover:-translate-y-1 hover:text-primary"
                      href="https://www.instagram.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="space-y-5 rounded bg-accent-100 p-8 bg-accent-700 lg:p-10">
              <h3 className="font-secondary text-md font-bold leading-[1.25] text-white md:text-lg">
                Search
              </h3>
              <div className="flex rounded items-center gap-0">
                <div className="relative w-full">
                  <input
                    placeholder="Your name"
                    className="flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 text-body placeholder:text-body border border-accent-900 border-opacity-20 border-accent-200 focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 rounded-r-none border-none bg-accent-900"
                    name="text"
                  />
                </div>
                <button
                  className="relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white hover:after:w-full hover:after:left-0 !h-[60px] !w-[60px] flex-none rounded-l-none !p-0"
                  type="submit"
                >
                  <span className="relative z-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="space-y-5 rounded bg-accent-100 p-8 bg-accent-700 lg:p-10">
              <h3 className="font-secondary text-md font-bold leading-[1.25] text-white md:text-lg">
                Category
              </h3>
              <nav aria-label="footer links navigation">
                <ul className="grid gap-2.5 divide-y divide-accent-700/20 divide-accent-200/20">
                  <li className="flex items-center gap-2.5 pt-2.5 first:pt-0">
                    <span className="grid h-3 w-3 place-items-center border border-primary">
                      <span className="block h-0.5 w-0.5 bg-primary"></span>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href=""
                    >
                      Genarel consturction
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 pt-2.5 first:pt-0">
                    <span className="grid h-3 w-3 place-items-center border border-primary">
                      <span className="block h-0.5 w-0.5 bg-primary"></span>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href=""
                    >
                      Business Advice
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 pt-2.5 first:pt-0">
                    <span className="grid h-3 w-3 place-items-center border border-primary">
                      <span className="block h-0.5 w-0.5 bg-primary"></span>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href=""
                    >
                      Stock market
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 pt-2.5 first:pt-0">
                    <span className="grid h-3 w-3 place-items-center border border-primary">
                      <span className="block h-0.5 w-0.5 bg-primary"></span>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href=""
                    >
                      Regular start
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 pt-2.5 first:pt-0">
                    <span className="grid h-3 w-3 place-items-center border border-primary">
                      <span className="block h-0.5 w-0.5 bg-primary"></span>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-400 hover:text-primary ease-in-out"
                      href=""
                    >
                      Regular start
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="space-y-5 rounded bg-accent-100 p-8 bg-accent-700 lg:p-10">
              <h3 className="font-secondary text-md font-bold leading-[1.25] text-white md:text-lg">
                Tags
              </h3>
              <nav aria-label="tags">
                <ul className="flex flex-wrap gap-5">
                  <li className="inline-flex min-h-[2.5rem] cursor-pointer items-center border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent border-none bg-accent-900 text-body hover:bg-primary hover:text-white">
                    All Project
                  </li>
                  <li className="inline-flex min-h-[2.5rem] cursor-pointer items-center border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent border-none bg-accent-900 text-body hover:bg-primary hover:text-white">
                    Stand
                  </li>
                  <li className="inline-flex min-h-[2.5rem] cursor-pointer items-center border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent border-none bg-accent-900 text-body hover:bg-primary hover:text-white">
                    Regularly
                  </li>
                  <li className="inline-flex min-h-[2.5rem] cursor-pointer items-center border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparent border-none bg-accent-900 text-body hover:bg-primary hover:text-white">
                    Startup
                  </li>
                  <li className="inline-flex min-h-[2.5rem] cursor-pointer items-center border border-accent-900/20 px-2.5 py-0.5 text-accent-800 transition-colors duration-300 hover:border-transparentborder-none bg-accent-900 text-body hover:bg-primary hover:text-white">
                    Productsline
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
