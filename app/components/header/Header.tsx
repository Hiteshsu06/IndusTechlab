import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='text-white z-100 left-[32px] right-[32px] top-[32px] mx-auto hidden lg:block absolute pt-30px'>
        <div className="grid grid-cols-6">
            <div className='bg-[#262626] flex justify-center items-center'>
              <Image src="/logo.webp" width={150} height={60} alt="logo" className={`${styles.imageHeight}`}/>
            </div>
            <div className='col-span-5 bg-[#212124]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-8 pl-8'>
                        <div>
                            <span><i className="ri-phone-fill red-theme-color text-[1.4rem]"></i></span>
                            <span className={`ms-2 hover:text-white hover:cursor-pointer relative text-[1.2rem] ${styles.socialLink}`}>(629) 555-0129</span>
                        </div>
                        <div>
                            <span><i className="ri-mail-fill red-theme-color text-[1.4rem]"></i></span>
                            <span className={`ms-2 hover:text-white hover:cursor-pointer relative text-[1.2rem] ${styles.socialLink}`}>info@example.com</span>
                        </div>
                        <div>
                            <span><i className="ri-send-plane-fill red-theme-color text-[1.4rem]"></i></span>
                            <span className={`ms-2 hover:cursor-pointer hover:text-white text-[1.2rem] relative ${styles.socialLink}`}>6391 Elgin St. Celina, 10299</span>
                        </div>
                    </div>
                    <div>
                        <button className={`relative z-[2] text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-[#B91202] after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 hover:cursor-pointer ${styles?.transitionColors}`}>GET A QUOTE <span><i className="ri-arrow-right-line text-white text-[1.2rem]"></i></span></button>
                    </div>
                </div>
                <div className='flex justify-between items-center border-t border-t-[#464646]'>
                    <div className='flex gap-8 pl-8'>
                    <div className="relative">
                    <div className="flex gap-10">
                        <div className={`relative group ${styles.z100} hover:text-[#B91202]`}>
                            <Link className={`link ${styles?.customTransition}`} href="/">
                                Home <i className="ri-arrow-down-s-fill"></i>
                            </Link>
                            <div className={`absolute left-0 hidden bg-[#212124] text-white group-hover:block w-40  ${styles.labelTransition}`}>
                                <ul className='pt-[16px]'>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Home 1</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Home 2</Link></li>
                                </ul>
                            </div>
                        </div>

                        <Link className={`link ${styles?.customTransition} hover:text-[#B91202] relative`} href="/">
                            About
                        </Link>

                        <div className={`relative group ${styles.z100} hover:text-[#B91202]`}>
                            <Link className={`link ${styles?.customTransition}`} href="/">
                                Service <i className="ri-arrow-down-s-fill"></i>
                            </Link>
                            <div className={`absolute left-0 hidden bg-[#212124] text-white group-hover:block w-40 z-1000 ${styles.labelTransition}`}>
                                <ul className="pt-[16px]">
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Service List</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Service One</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={`relative group ${styles.z100} hover:text-[#B91202]`}>
                            <Link className={`link ${styles?.customTransition}`} href="/">
                                Project <i className="ri-arrow-down-s-fill"></i>
                            </Link>
                            <div className={`absolute left-0 hidden bg-[#212124] text-white group-hover:block w-40 z-1000 ${styles.labelTransition}`}>
                                <ul className="pt-[16px]">
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Project List</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Project One</Link></li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className={`relative group ${styles.z100} hover:text-[#B91202]`}>
                            <Link className={`link ${styles?.customTransition}`} href="/">
                                Blog <i className="ri-arrow-down-s-fill"></i>
                            </Link>
                            <div className={`absolute left-0 hidden bg-[#212124] text-white group-hover:block w-40 z-1000 ${styles.labelTransition}`}>
                                <ul className="pt-[16px]">
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Blog List</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Blog One</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`relative group ${styles.z100} hover:text-[#B91202]`}>
                            <Link className={`link ${styles?.customTransition}`} href="/">
                                Pages <i className="ri-arrow-down-s-fill"></i>
                            </Link>
                            <div className={`absolute left-0 hidden bg-[#212124] text-white group-hover:block w-40 z-1000 ${styles.labelTransition}`}>
                                <ul className="pt-[16px]">
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Testimonial</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Team</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">Pricing</Link></li>
                                    <li><Link href="/" className="block px-4 py-3 hover:bg-[#B91202]">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>      
                        <Link className={`link hover:text-[#B91202] ${styles?.customTransition}`} href="/">
                            Contact
                        </Link>
                       </div>
                    </div>

                    </div>
                    <div className='flex justify-between gap-4'>
                        <button className='p-[0.7rem]'><i className="ri-search-line text-white text-[1.4rem]"></i></button>
                        <button className='p-[0.7rem]'><i className="ri-shopping-cart-fill text-white text-[1.4rem]"></i></button>
                        <button className='p-[0.7rem] scale-[1.4]'><i className="ri-menu-3-line text-white text-[1.4rem]"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;