import Image from "next/image";
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-accent-100 text-accent-800 bg-accent-900 text-body">
      <div className="py-16 md:py-20 px-8">
        <div className="container_container__az_fT">
          <div className="grid gap-10 grid-cols-4">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="aos-init aos-animate"
            >
              <a target="_self" href="/">
                <Image src="/logo.webp" width={150} height={60} alt="logo"/>
              </a>
              <p className="mb-7 mt-3">
                Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply
                is out no our o dummy text.
              </p>
              <nav aria-label="social links">
                <ul className="inline-flex min-h-[50px] items-center divide-x rounded-5 bg-primary  text-white">
                  <li>
                    <a
                      target="_blank"
                      aria-label="https://www.facebook.com/"
                      className="text-base/[1.75] transition-transform duration-350 hover:-translate-y-1 block px-4"
                      href="https://www.facebook.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="white"
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
                      aria-label="https://twitter.com/"
                      className="text-base/[1.75] transition-transform duration-350 hover:-translate-y-1 block px-4"
                      href="https://twitter.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="white"
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
                      aria-label="https://www.instagram.com/"
                      className="text-base/[1.75] transition-transform duration-350 hover:-translate-y-1 block px-4"
                      href="https://www.instagram.com/"
                    >
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="white"
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
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="aos-init aos-animate"
            >
              <h3 className="text-white font-secondary text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]">
                Get Free Link
              </h3>
              <nav aria-label="footer links navigation">
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2.5 leading-normal">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300  hover:text-white"
                      href="/"
                    >
                      Software Development
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 leading-normal">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300 hover:text-white"
                      href="/"
                    >
                      Data Analytics
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300 hover:text-white"
                      href="/"
                    >
                      IT Consulting
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300 hover:text-white"
                      href="/"
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300 hover:text-white"
                      href="/"
                    >
                      Network Solutions
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex-none text-sm/[1] text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 320 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </span>
                    <a
                      target="_self"
                      className="transition-colors duration-300 hover:text-white"
                      href="/"
                    >
                      Others
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="aos-init aos-animate"
            >
              <h3 className="text-white font-secondary text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]">
                Address
              </h3>
              <ul aria-label="addresses" className="grid gap-5">
                <li className="flex items-center gap-5 leading-normal">
                  <span className="w-10 h-10 rounded-5 inline-grid place-items-center bg-accent-700 border border-accent-800 border-transparent text-primary flex-none">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
                    </svg>
                  </span>
                  <address className="not-italic">
                    2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                  </address>
                </li>
                <li className="flex items-center gap-5 leading-normal">
                  <span className="w-10 h-10 rounded-5 inline-grid place-items-center bg-accent-700 border border-accent-800 border-transparent text-primary flex-none">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                    </svg>
                  </span>
                  <div className="grid gap-1">
                    <a
                      href="mailto:debbie.baker@example.com"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      debbie.baker@example.com
                    </a>
                    <a
                      href="mailto:nevaeh.simm@example.com"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      nevaeh.simm@example.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-5 leading-normal">
                  <span className="w-10 h-10 rounded-5 inline-grid place-items-center bg-accent-700 border border-accent-800 border-transparent text-primary flex-none">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                    </svg>
                  </span>
                  <div className="grid gap-1">
                    <a
                      href="tel:(405)555-0128"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      (405) 555-0128
                    </a>
                    <a
                      href="tel:(629)555-0129"
                      className="transition-colors duration-300 hover:text-white"
                    >
                      (629) 555-0129
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="800"
              className="aos-init aos-animate"
            >
              <h3 className="text-white font-secondary text-md font-bold leading-[1.25] md:text-lg mb-5 md:mb-[1.875rem]">
                Recent Blog
              </h3>
              <div className="grid gap-6">
                <article className="group flex items-center gap-4 text-white">
                  <div className="flex-none overflow-hidden rounded-5">
                    <Image src="/contact-footer-link1.webp" className={`transition-transform duration-700 hover:scale-[1.1] hover:text-white ${styles?.objectCover}`} width={80} height={80} alt="Picture of the recent blog"/>
                  </div>
                  <div>
                    <p className="flex items-center gap-2.5 text-body">
                      <span><i className="ri-calendar-event-fill red-theme-color text-[1.3rem]"></i></span>
                      <span>january 11, 2024</span>
                    </p>
                    <h4 className="text-md font-bold leading-normal">
                      <a
                        target="_self"
                        className="transition-colors duration-300 hover:text-primary"
                        href="./blog-details"
                      >
                        We provide a range of IT solutions
                      </a>
                    </h4>
                  </div>
                </article>
                <article className="group flex items-center gap-4 text-accent-800 text-white">
                  <div className="flex-none overflow-hidden rounded-5">
                     <Image src="/contact-footer-link2.webp" className={`transition-transform duration-700 hover:scale-[1.1] hover:text-white ${styles?.objectCover}`} width={80} height={80} alt="Picture of the recent blog"/>
                  </div>
                  <div>
                    <p className="flex items-center gap-2.5 text-body">
                      <span><i className="ri-calendar-event-fill red-theme-color text-[1.3rem]"></i></span>
                      <span>january 11, 2024</span>
                    </p>
                    <h4 className="text-md font-bold leading-normal">
                      <a
                        target="_self"
                        className="transition-colors duration-300 hover:text-primary"
                        href="./blog-details"
                      >
                        IT solutions enhance efficiency
                      </a>
                    </h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[90px] items-center border-t border-accent-800 border-opacity-20 py-5 dark:border-body dark:border-opacity-20">
        <div className="flex flex-wrap items-center w-full justify-between gap-x-8 gap-y-4 md:gap-x-10 px-8">
            <p>© Yoursitename 2024 | All Rights Reserved</p>
            <nav aria-label="footer bottom navigation">
                <ul className="flex flex-wrap items-center gap-x-4  md:gap-x-7">
                <li>
                    <a
                    target="_self"
                    aria-label="Go to page Trams &amp; Condition"
                    className="transition-colors duration-300 hover:text-primary dark:hover:text-white"
                    href="/"
                    >
                    Trams &amp; Condition
                    </a>
                </li>
                <li>
                    <a
                    target="_self"
                    aria-label="Go to page Privacy Policy"
                    className="transition-colors duration-300 hover:text-primary dark:hover:text-white"
                    href="/"
                    >
                    Privacy Policy
                    </a>
                </li>
                <li>
                    <a
                    target="_self"
                    aria-label="Go to page Contact Us"
                    className="transition-colors duration-300 hover:text-primary dark:hover:text-white"
                    href="/"
                    >
                    Contact Us
                    </a>
                </li>
                </ul>
            </nav>
        </div>
      </div>
    </footer>
  );
}
