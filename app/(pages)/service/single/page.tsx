import Footer from '../../../components/footer/Footer';
import FooterLinks from '../../../components/footer-links/FooterLinks';
import PrimaryBackgroundFrame from '../../../components/primaryBackgroundFrame/PrimaryBackgroundFrame';
import Section14 from '../section14/page';

export default function SingleService() {
  return (
    <div className='bg-base'>
      <PrimaryBackgroundFrame pageName="Service Details"/>
      <Section14/>
      <section className='px-8 bg-accent-700 mt-20'>
        <FooterLinks/>
      </section>
      <section className='bg-accent-700'>
        <Footer/>
      </section>
   </div>
  );
}
