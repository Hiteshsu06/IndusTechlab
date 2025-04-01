"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './FooterLinks.module.css';

const FooterLinks = () => {
  const pathname = usePathname();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
        <div className='flex items-center justify-between gap-x-20 gap-y-4 pb-5 pt-[60px] base-theme lg:pt-20'>
            <Image src="/logo.webp" width={150} height={60} alt="logo"/>
            <div className='flex gap-[0.625rem] items-center'>
                 <button className={`bg-gray-500 bg-opacity-10 transition-all duration-250 hover:-translate-y-1 w-[30px] h-[30px] rounded hover:bg-[#B91202] text-white hover:text-white ${styles?.socialIcon}`}>
                    <i className="ri-facebook-fill"></i>
                 </button>
                 <button className={`bg-gray-500 bg-opacity-10 transition-all duration-250 hover:-translate-y-1 w-[30px] h-[30px] rounded hover:bg-[#B91202] text-white hover:text-white ${styles?.socialIcon}`}>
                    <i className="ri-linkedin-fill"></i>
                 </button>
                 <button className={`bg-gray-500 bg-opacity-10 transition-all duration-250 hover:-translate-y-1 w-[30px] h-[30px] rounded hover:bg-[#B91202] text-white hover:text-white ${styles?.socialIcon}`}>
                    <i className="ri-twitter-fill"></i>
                 </button>
                 <button className={`bg-gray-500 bg-opacity-10 transition-all duration-250 hover:-translate-y-1 w-[30px] h-[30px] rounded hover:bg-[#B91202] text-white hover:text-white ${styles?.socialIcon}`}>
                    <i className="ri-instagram-fill"></i>
                 </button>
            </div>
        </div>
        <div className={`grid grid-cols-4 gap-4 py-[60px] base-theme ${styles.container}`}>
            <div data-aos="fade-up" data-aos-delay="200" className='aos-init aos-animate'>
                <div className={styles?.heading}>Quick Links</div>
                <div>
                    <ul className={styles?.ul}>
                        <li>
                            <Link className={`link ${pathname === '/' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/about' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/about">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/service' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/service">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/portfolio' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/blog' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400" className='aos-init aos-animate'>
                <div className={styles?.heading}>Service Links</div>
                <div>
                    <ul className={styles?.ul}>
                        <li>
                            <Link className={`link ${pathname === '/' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/">
                                Software Development
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/about' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/about">
                                Dedicated Java Expertise
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/service' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/service">
                                IT Consulting
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/portfolio' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/portfolio">
                                UI/UX Design
                            </Link>
                        </li>
                        <li>
                            <Link className={`link ${pathname === '/blog' ? 'active' : ''} hover:text-white ${styles?.customTransition}`} href="/blog">
                                Dedicated Frontend Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600" className='aos-init aos-animate'>
                <div className={styles?.heading}>Recent Blog</div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-4'>
                        <div className='overflow-hidden rounded'>
                            <Image src="/contact-footer-link1.webp" className={`transition-transform duration-700 hover:scale-[1.1] hover:text-white ${styles?.objectCover}`} width={80} height={80} alt="Picture of the recent blog"/>
                        </div>
                        <div>
                            <div className={`${styles?.customTransition} hover:cursor-pointer hover:text-[#B91202]`}>We providea range of IT solutions</div>
                            <div>
                                <span><i className="ri-calendar-event-fill red-theme-color text-[1.3rem]"></i></span>
                                <span className='ms-2'>january 11, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='overflow-hidden rounded'>
                            <Image src="/contact-footer-link2.webp" className={`transition-transform duration-700 hover:scale-[1.1] hover:text-white ${styles?.objectCover}`} width={80} height={80} alt="Picture of the recent blog"/>
                        </div>
                        <div>
                            <div className={`${styles?.customTransition} hover:cursor-pointer hover:text-[#B91202]`}>IT solutions enhance effciency</div>
                            <div>
                                <span><i className="ri-calendar-event-fill red-theme-color text-[1.3rem]"></i></span>
                                <span className='ms-2'>january 11, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="800" className='aos-init aos-animate'>
                <div className={styles?.heading}>Contact Us</div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <span><i className="ri-phone-fill red-theme-color text-[1.3rem]"></i></span>
                        <span className={`ms-3 hover:text-white hover:cursor-pointer ${styles?.customTransition}`}>+91 7984457122</span>
                    </div>
                    <div>
                        <span><i className="ri-mail-fill red-theme-color text-[1.3rem]"></i></span>
                        <span className={`ms-3 hover:text-white hover:cursor-pointer ${styles?.customTransition}`}>harsh@industechlab.com</span>
                    </div>
                    <div>
                        <span><i className="ri-map-pin-2-fill red-theme-color text-[1.3rem]"></i></span>
                        <span className={`ms-3 hover:text-white hover:cursor-pointer ${styles?.customTransition}`}>10th Floor, 1004, Westgate, Sarkhej - Gandhinagar Hwy, nr. YMCA Club, Ahemdabad, Gujarat 380051</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterLinks
