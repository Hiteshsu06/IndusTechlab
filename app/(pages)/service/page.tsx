import PrimaryBackgroundFrame from "@/app/components/primaryBackgroundFrame/PrimaryBackgroundFrame";
import Section13 from "./section13/page";
import Footer from '../../components/footer/Footer';
import FooterLinks from '../../components/footer-links/FooterLinks';

export default function Service() {
  return (
   <div className="bg-base">
      <PrimaryBackgroundFrame pageName="Services"/>
      <Section13/>
      <section className='px-8 bg-accent-700 mt-20'>
        <FooterLinks/>
      </section>
      <section className='bg-accent-700'>
        <Footer/>
      </section>
   </div>
  );
}
