"use client";
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles?.container}>
        <nav>
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
            </Link>
            <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
                About
            </Link>
            <Link className={`link ${pathname === '/service' ? 'active' : ''}`} href="/service">
                Service
            </Link>
            <Link className={`link ${pathname === '/project' ? 'active' : ''}`} href="/project">
                Project
            </Link>
            <Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">
                Blog
            </Link>
            <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
                Contact
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
