import Footer from '../../../components/footer/Footer';
import FooterLinks from '../../../components/footer-links/FooterLinks';
import PrimaryBackgroundFrame from '../../../components/primaryBackgroundFrame/PrimaryBackgroundFrame';
import Section17 from '../section17/page';

export default function Testimonial() {
  return (
    <div className='bg-base'>
      <PrimaryBackgroundFrame pageName="Blog Details"/>
      <div className='px-[32px]'>
        <Section17 /> 
      </div>
      <div className='px-[32px]'>
        <FooterLinks/>
        <Footer/>
      </div>
   </div>
  );
}
