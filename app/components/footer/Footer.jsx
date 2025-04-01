"use client";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`base-theme ${styles.container}`}>
        <div>© www.indusit.co 2024 | All Rights Reserved</div>
        <div className={`py-5 gap-x-4 ${styles.rightContent}`}>
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
            <div>Contact Us</div>
        </div>
    </div>
  )
}

export default Footer
