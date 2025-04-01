import PrimaryBackgroundFrame from "@/app/components/primaryBackgroundFrame/PrimaryBackgroundFrame";
import Footer from '../../components/footer/Footer';
import FooterLinks from '../../components/footer-links/FooterLinks';
// import Section16 from "./section16/page";

export default function Blog() {
  return (
    <div className="bg-base">
      <PrimaryBackgroundFrame pageName="Blogs"/>
      <div className="text-white flex items-center justify-center w-full">
        <h1 className="font-secondary text-[2rem] font-bold lg:w-1/2 text-center">Coming Soon</h1>
      </div>
      {/* <Section16/> */}
    <section className='px-8 bg-accent-700 mt-20'>
      <FooterLinks/>
    </section>
    <section className='bg-accent-700'>
      <Footer/>
    </section>
</div>
  );
}
