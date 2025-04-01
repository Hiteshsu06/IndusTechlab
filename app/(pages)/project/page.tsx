import PrimaryBackgroundFrame from "@/app/components/primaryBackgroundFrame/PrimaryBackgroundFrame";
import Footer from '../../components/footer/Footer';
import FooterLinks from '../../components/footer-links/FooterLinks';
import Section15 from './section15/page';

export default function Project() {
  return (
    <div className="bg-base">
      <PrimaryBackgroundFrame pageName="Projects"/>
      <div className="text-white flex items-center justify-center w-full">
        <h1 className="font-secondary text-[2rem] font-bold lg:w-1/2 text-center">Coming Soon</h1>
      </div>
      {/* <Section15/> */}
      <section className='px-8 bg-accent-700 mt-20'>
        <FooterLinks/>
      </section>
      <section className='bg-accent-700'>
        <Footer/>
      </section>
  </div>
  );
}
