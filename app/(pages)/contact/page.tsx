import Footer from '../../components/footer/Footer';
import FooterLinks from '../../components/footer-links/FooterLinks';
import ContactForm from './contactForm/ContactForm';
import PrimaryBackgroundFrame from '../../components/primaryBackgroundFrame/PrimaryBackgroundFrame';

export default function Contact() {
  return (
   <div className='bg-base'>
      <PrimaryBackgroundFrame pageName="Contact Us"/>
      <div className='px-[32px]'>
        <ContactForm/>
      </div>
      <div className='px-[32px]'>
        <FooterLinks/>
        <Footer/>
      </div>
   </div>
  );
}
