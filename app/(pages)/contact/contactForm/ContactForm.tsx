import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-12 gap-12 base-theme">
      <div className='col-span-8'>
        <div className='font-bold mb-[30px] leading-[1.25]  text-white text-[3rem] font-roboto'>Feel free to message</div>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <input type="text" placeholder="Your Name" className='rounded-md flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 border border-accent-900 border-opacity-20  focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 border-none bg-accent-700 text-[#BEBEBE] secondary-theme'/>
          </div>
          <div>
            <input type="text" placeholder="Your Email" className='rounded-md flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 border border-accent-900 border-opacity-20  focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-700 border-none text-[#BEBEBE] secondary-theme'/>
          </div>
          <div>
            <input type="text" placeholder="Subject" className='rounded-md flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 border border-accent-900 border-opacity-20  focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 border-none bg-accent-700 text-[#BEBEBE] secondary-theme'/>
          </div>
          <div>
            <input type="text" placeholder="Phone" className='rounded-md flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 border border-accent-900 border-opacity-20  focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 border-none bg-accent-700 text-[#BEBEBE] secondary-theme'/>
          </div>
          <div className='col-span-2'>
            <textarea name="" id="" placeholder="Message" rows={8} className='resize-none rounded-md flex items-center min-h-[3.5rem] md:min-h-[3.75rem] w-full px-4 md:px-5 py-2 text-accent-800 placeholder:text-accent-800 border border-accent-900 border-opacity-20  focus:border-accent-900 focus:ring-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 bg-accent-700 border-none text-[#BEBEBE] secondary-theme'></textarea>
          </div>
        </div>
        <div className='mt-[1.875rem]'>
          <button className={`relative z-[2] text-white overflow-hidden rounded text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase inline-flex items-center justify-center gap-3 md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-[#B91202] after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 ${styles?.transitionColors}`}>SEND A MESSAGE</button>
        </div>
      </div>
      <div className='col-span-4 font-secondary'>
        <div className='font-bold mb-[10px] text-white text-[3rem] font-roboto'>Get in touch</div>
        <div className='text-[#BEBEBE] leading-[2rem]'>
            It is a long established fact that a reader will be distrol acted bioiiy desig the rea dablea contentIt is a long established fact that a reader will be
        </div>
        <div className='mt-8'>
          <div className='flex gap-8'>
            <div className='bg-[#B91202] w-[60px] h-[50px] rounded-[50%] flex justify-center items-center'>
                <span><i className="ri-map-pin-fill text-white text-[1.2rem]"></i></span>
            </div>
            <div>
              <div className='text-white font-[600] mb-2'>Address</div>
              <div className='text-[#BEBEBE] leading-[2rem]'>Dhaka 102, utl 1216, road 45 house shantighar rahuta, 1213</div>
            </div>
          </div>
          <div className='flex gap-8 mt-4'>
            <div className='bg-[#B91202] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center'>
                <span><i className="ri-mail-fill text-white text-[1.2rem]"></i></span>
            </div>
            <div>
              <div className='text-white font-[600] mb-2'>Email Address</div>
              <div className='text-[#BEBEBE] leading-[2rem]'>ijmnhhasan000@yourmail.com</div>
            </div>
          </div>
          <div className='flex gap-8 mt-4'>
            <div className='bg-[#B91202] w-[50px] h-[50px] rounded-[50%] flex justify-center items-center'>
                <span><i className="ri-phone-fill text-white text-[1.2rem]"></i></span>
            </div>
            <div>
              <div className='text-white font-[600] mb-2'>Phone number</div>
              <div className='text-[#BEBEBE] leading-[2rem]'>0000-0000-00-000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;
