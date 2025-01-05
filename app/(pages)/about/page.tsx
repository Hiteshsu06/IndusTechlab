import PrimaryBackgroundFrame from '@/app/components/primaryBackgroundFrame/PrimaryBackgroundFrame';
import Section3 from '../home/section3/page';
import Section4 from '../home/section4/page';
import Section7 from '../home/section7/page';
import Section6 from '../home/section6/page';
import Section10 from '../home/section10/page';
import Section11 from '../home/section11/page';
import Section12 from '../home/section12/page';
import Footer from '../../components/footer/Footer';
import FooterLinks from '../../components/footer-links/FooterLinks';
import './style.css';

export default function About() {
  
  return (
    <div className='bg-base'>
      <PrimaryBackgroundFrame pageName="About Us"/>
      <Section3 />
      <Section4 />
      <Section7 />
      <Section6 />
      <Section10 />
      <Section11 />
      <Section12 />
      <section className='px-8 bg-accent-700'>
        <FooterLinks/>
      </section>
      <section className='bg-accent-700'>
        <Footer/>
      </section>
   </div>
  );
}
