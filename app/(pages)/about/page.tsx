import DemoSlider from '../home/slider/SliderButton';
import './style.css';

let data = [
  {
    "id": 1,
    "title": "ARE AWESOME",
    "tagline": "NEXTJS 13 & SWIPER SLIDER",
    "image": "/image1.jpg",
    "buttons": [
      {
        "id": 1,
        "text": "Roberto Nickson",
        "link": "https://www.pexels.com/@rpnickson/",
        "type": "btn-dark btn-circle"
      }
    ]
  },
  {
    "id": 2,
    "title": "GIVE IT A SHOOT",
    "tagline": "IF YOU LIKE IT",
    "image": "/image2.jpg",
    "buttons": [
      {
        "id": 1,
        "text": "Julia M Cameron",
        "link": "https://www.pexels.com/@julia-m-cameron/",
        "type": "btn-dark btn-circle"
      }
    ]
  }
];
export default function About() {
  
  return (
   <div className="bg-[#141416] marquee-container">
      <section className='section-padding-primary overflow-hidden'>
          <div className='mx-auto max-w-[1762px] px-4'>
            <div className='mx-auto max-w-[630px]'>
              <div className='aos-init aos-animate'>
                <div className='text-center mb-10 md:mb-[3.75rem]'>
                  <span className='mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md'>latest portfolio</span>
                  <h2 className='font-secondary text-xl font-bold leading-[1.25] text-accent-900 text-white md:text-2xl'>Where Innovation Meets IT Excellence</h2>
                </div>
              </div>
            </div>
            <div className='grid gap-[1.875rem] md:grid-cols-2 lg:grid-cols-4'>
              <div className='lg:mt-[70px] aos-init aos-animate'>
                <a href="" className='group/portfolio relative z-1 block aspect-[640/916] overflow-hidden rounded-5 p-6 md:p-[1.875rem]'>
                  <span className='absolute inset-0 z-[2] bg-gradient-1 from-primary/0 to-primary [transition:all_500ms_ease] md:[transform:perspective(400px)_rotateX(90deg)_scaleY(0.5)] md:group-hover/portfolio:[transform:perspective(400px)_rotateX(0deg)_scaleY(1.0)] md:group-hover/portfolio:[transition-delay:.1s] md:group-hover/portfolio:[transition:all_.7s_ease]'></span>
                  <img className='pointer-events-none [transform:scale(1.05)] [transition:.9s_ease] group-hover/portfolio:[transform:scale(1)]' src="https://techlab-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproject%2F1.png&w=750&q=75" alt="" />
                  <div className='relative z-10 flex h-full flex-col'>
                    <div className='mt-auto divide-y md:opacity-0 md:transition-[transform,opacity] md:duration-500  md:group-hover/portfolio:opacity-100'>
                      <h3 className='overflow-hidden text-md font-bold leading-[1.25] text-white md:text-lg'>
                        <span className='block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(-100%)] md:group-hover/portfolio:[transform:translateY(0)]'>Cloud Migrate Pro</span>
                      </h3>
                      <p className='mt-[13px] overflow-hidden pt-[11px] text-body'>
                        <span className='block [transition-delay:500ms] [transition:all_.9s_ease] md:[transform:translateY(100%)] md:group-hover/portfolio:[transform:translateY(0)]'>Lorem Ipsum is simply dummy</span>
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className='mt-0 aos-init aos-animate'></div>
              <div className='lg:mt-[70px] aos-init aos-animate'></div>
              <div className='mt-0 aos-init aos-animate'></div>
            </div>
          </div>
      </section>
      
      
      <section>
        <DemoSlider data={data}/>
      </section>
     
      <section>
        <div className='h-full rounded-5 bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] text-body bg-accent-700 sm:p-[50px]'>
          <div className='flex flex-col gap-12 md:flex-row md:gap-5'>
            <div className='relative max-w-max flex-none'>
              {/* <Image 
                src="https://techlab-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftestimonial%2Fperson-1.jpg&w=256&q=75"
                /> */}
                <span className='absolute left-1/2 grid h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 place-items-center  rounded-full border-2 border-primary-light bg-primary text-lg/[1] text-white'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                </span>
            </div>
            <div className='flex-1'>
              <h3 className='text-md font-bold leading-[1.25] text-accent-900 text-white md:text-lg'>Jane Cooper</h3>
              <p className='mt-1'>Team Leader</p>
              <div className='mt-2 min-h-[30px] text-primary'>
                <div className='flex gap-1'>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>☆</span>
                </div>
              </div>
              <p className='mt-5'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='grid gap-[30px] sm:grid-cols-2 xl:grid-cols-4'>
          <div className='aos-init aos-animate'>
            <div className='group relative min-h-[155px] overflow-hidden rounded-5 p-[30px] bg-accent-700'>
              <span className='absolute right-[30px] top-0 inline-grid h-16 w-16 place-items-center rounded-b-5 bg-primary text-white'>
                <span className='text-[2.5rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]'>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3114_85)"><path d="M8.47057 25.272L8.30386 24.5886L7.60437 24.5145L3.44531 24.0741V23.4492H13.1554C13.6399 26.7944 16.5191 29.3642 19.9986 29.3642C23.4781 29.3642 26.3573 26.7944 26.8418 23.4492H36.5519V24.0741L32.3928 24.5145L31.6933 24.5886L31.5266 25.272C31.2361 26.4628 30.7657 27.5835 30.1455 28.6037L29.78 29.2048L30.2223 29.7519L32.8526 33.0052L30.5546 35.3032L27.3013 32.6729L26.7542 32.2306L26.1531 32.5961C25.1329 33.2163 24.0122 33.6867 22.8214 33.9772L22.138 34.144L22.0639 34.8434L21.6235 39.0025H18.3737L17.9333 34.8434L17.8592 34.144L17.1758 33.9772C15.985 33.6867 14.8643 33.2163 13.8441 32.5961L13.243 32.2306L12.6959 32.6729L9.44264 35.3032L7.14462 33.0052L9.7749 29.7519L10.2172 29.2048L9.85174 28.6037C9.23149 27.5835 8.76108 26.4628 8.47057 25.272Z" stroke="white" strokeWidth="2"></path><path d="M16.4688 4.53383C16.4688 2.58619 18.0549 1 20.0026 1C21.9502 1 23.5364 2.58619 23.5364 4.53383C23.5364 6.48144 21.9502 8.06758 20.0026 8.06758C18.0549 8.06758 16.4688 6.48144 16.4688 4.53383Z" stroke="white" strokeWidth="2"></path><path d="M15.1714 11.3203C15.1714 11.3203 15.1714 11.3203 15.1714 11.3203H24.8256C26.4959 11.3203 27.8564 12.6808 27.8564 14.3511V19.1022H12.1406V14.3511C12.1406 12.6808 13.5011 11.3204 15.1714 11.3203Z" stroke="white" strokeWidth="2"></path><path d="M7.32031 6.15523C7.32031 4.46805 8.69456 3.09375 10.3818 3.09375C12.069 3.09375 13.4433 4.46799 13.4433 6.15523C13.4433 6.53521 13.3739 6.89812 13.2473 7.23309C11.9658 7.58005 10.8238 8.26377 9.92085 9.181C8.45111 8.95792 7.32031 7.68532 7.32031 6.15523Z" stroke="white" strokeWidth="2"></path><path d="M3.44531 14.9507C3.44531 13.5119 4.61743 12.3398 6.05617 12.3398H8.07626C7.89441 12.9798 7.79695 13.6548 7.79695 14.3515V19.1027H3.44531V14.9507Z" stroke="white" strokeWidth="2"></path><path d="M26.5547 6.15523C26.5547 4.46805 27.9289 3.09375 29.6162 3.09375C31.3034 3.09375 32.6777 4.46799 32.6777 6.15523C32.6777 7.68535 31.5468 8.95797 30.0771 9.18101C29.1742 8.26377 28.0322 7.58005 26.7506 7.23309C26.624 6.89813 26.5547 6.5352 26.5547 6.15523Z" stroke="white" strokeWidth="2"></path><path d="M32.1955 14.3515C32.1955 13.6548 32.0981 12.9798 31.9162 12.3398H33.9363C35.3751 12.3398 36.5472 13.5119 36.5472 14.9506V19.1026H32.1955V14.3515Z" stroke="white" strokeWidth="2"></path></g><defs><clipPath id="clip0_3114_85"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
                </span>
              </span>
              <h3 className='pr-20 font-secondary text-[3rem] font-bold leading-[1.25] text-transparent [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_#1A1A1C] [-webkit-text-stroke:1px_white]'>
                <span>250+</span>
                <span className='sr-only'>Counter</span>
              </h3>
              <p className='mt-[5px] text-white'>Team Member</p>
            </div>
          </div>
        </div>
      </section>
      <section className='section-padding-primary overflow-hidden'>
        <div className='flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]'>
          <div className='lg:w-1/2 aos-init aos-animate'>
            <div className='text-left'>
              <span className='mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-primary md:text-md'>About Us</span>
              <h2 className='font-secondary font-bold leading-[1.25] text-white text-[3rem]'>Sculpting Digital Landscapes</h2>
              <p className='mt-5 whitespace-pre-line'>
              Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus volutpat, sodales purus. Nunc quis an mauris et eros vulputate mattis Nulla vitae ex nunc. Morbi quis purus convallis, fermentum metus the volutpatquis purus convallis
              </p>
            </div>
            <ul className='mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2'>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
              <li className='flex items-center gap-3 lg:gap-4'>
                <span className='text-lg text-primary'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                </span>
                <span className='block font-secondary text-md font-bold leading-[1.5] text-accent-900 text-white'>Mistakes To Avoid</span>
              </li>
            </ul>
          </div>
          <div className='lg:w-[45%]'>
            <div className='group relative z-1 mx-auto aos-init aos-animate'>
              <div className='inline-grid'>
                <div className='video-player_media-wrapper__FL2Ld cursor-pointer relative inline-flex overflow-hidden rounded-5 after:pointer-events-none after:absolute after:left-0 after:top-0 after:z-1 after:h-0 after:w-full after:bg-white/30 after:opacity-100 hover:transition-all hover:after:h-full hover:after:opacity-0 hover:after:duration-400 hover:after:ease-linear'>
                {/* <Image
                  src="https://techlab-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fabout%2Fabout-5.png&w=1920&q=75"> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="whitespace-nowrap font-secondary border-y border-accent-200 py-7 border-white border-opacity-30">
        <div className="inline-flex w-full flex-nowrap gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] lg:gap-[38px]">
            <div className="marquee-container flex items-center justify-center gap-8 md:justify-start lg:gap-[38px]">
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
              <div className="animate-infinite-scroll marquee-content flex items-center justify-center gap-8 lg:gap-[38px]">
                <h3 className="text-[3rem] font-[700] leading-[1.25] text-white">Work process</h3>
                <span className="text-xl text-primary lg:text-[50px]">
                    <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                </span>
              </div>
            </div>
        </div>
      </div>
      <div className="relative whitespace-normal rounded-5 font-secondary bg-[#1a1a1c] p-6 lg:p-10">
          <div className="flex items-center gap-5">
            <div className="relative flex-none">
                <span className="absolute -top-3 inline-block h-16 w-16 rounded-full bg-primary"></span>
                <span className="relative -left-3 top-3 z-1 text-white">
                  <svg width="65" height="66" viewBox="0 0 65 66" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M60.9375 30.9651H52.8125V22.8401C52.8071 20.7091 52.4713 18.5918 51.8172 16.5636L60.3484 8.03233C60.7309 7.64984 60.9458 7.13107 60.9458 6.59014C60.9458 6.04922 60.7309 5.53045 60.3484 5.14796C59.9659 4.76547 59.4472 4.55058 58.9062 4.55058C58.3653 4.55058 57.8466 4.76547 57.4641 5.14796L50.0094 12.6839C48.2159 9.63409 45.6569 7.10563 42.5858 5.34887C39.5147 3.5921 36.0381 2.66797 32.5 2.66797C28.9619 2.66797 25.4852 3.5921 22.4142 5.34887C19.3431 7.10563 16.7841 9.63409 14.9906 12.6839L7.53594 5.14796C7.34655 4.95857 7.12171 4.80833 6.87426 4.70584C6.62681 4.60334 6.36159 4.55058 6.09375 4.55058C5.82591 4.55058 5.56069 4.60334 5.31324 4.70584C5.06579 4.80833 4.84095 4.95857 4.65156 5.14796C4.26907 5.53045 4.05419 6.04922 4.05419 6.59014C4.05419 7.13107 4.26907 7.64984 4.65156 8.03233L13.1828 16.5636C12.5287 18.5918 12.1929 20.7091 12.1875 22.8401V30.9651H4.0625C3.52378 30.9651 3.00712 31.1791 2.62619 31.5601C2.24526 31.941 2.03125 32.4577 2.03125 32.9964C2.03125 33.5351 2.24526 34.0518 2.62619 34.4327C3.00712 34.8136 3.52378 35.0276 4.0625 35.0276H12.1875V43.1526C12.1929 45.2837 12.5287 47.401 13.1828 49.4292L4.65156 57.9605C4.26907 58.343 4.05419 58.8617 4.05419 59.4026C4.05419 59.9436 4.26907 60.4623 4.65156 60.8448C5.03405 61.2273 5.55282 61.4422 6.09375 61.4422C6.63468 61.4422 7.15345 61.2273 7.53594 60.8448L14.9906 53.3089C16.7841 56.3587 19.3431 58.8872 22.4142 60.6439C25.4852 62.4007 28.9619 63.3248 32.5 63.3248C36.0381 63.3248 39.5147 62.4007 42.5858 60.6439C45.6569 58.8872 48.2159 56.3587 50.0094 53.3089L57.4641 60.7636C57.8466 61.1461 58.3653 61.361 58.9062 61.361C59.4472 61.361 59.9659 61.1461 60.3484 60.7636C60.7309 60.3811 60.9458 59.8623 60.9458 59.3214C60.9458 58.7805 60.7309 58.2617 60.3484 57.8792L51.8172 49.348C52.4631 47.3457 52.7988 45.2564 52.8125 43.1526V35.0276H60.9375C61.4762 35.0276 61.9929 34.8136 62.3738 34.4327C62.7547 34.0518 62.9688 33.5351 62.9688 32.9964C62.9688 32.4577 62.7547 31.941 62.3738 31.5601C61.9929 31.1791 61.4762 30.9651 60.9375 30.9651ZM32.5 6.59014C36.4554 6.59373 40.2738 8.03989 43.2392 10.6575C46.2046 13.2751 48.1134 16.8845 48.6078 20.8089H16.3922C16.8866 16.8845 18.7955 13.2751 21.7608 10.6575C24.7262 8.03989 28.5446 6.59373 32.5 6.59014ZM34.5312 59.2605V30.9651C34.5312 30.4264 34.3172 29.9098 33.9363 29.5288C33.5554 29.1479 33.0387 28.9339 32.5 28.9339C31.9613 28.9339 31.4446 29.1479 31.0637 29.5288C30.6828 29.9098 30.4688 30.4264 30.4688 30.9651V59.2605C26.5443 58.766 22.935 56.8572 20.3174 53.8918C17.6997 50.9264 16.2536 47.1081 16.25 43.1526V24.8714H48.75V43.1526C48.7464 47.1081 47.3003 50.9264 44.6826 53.8918C42.065 56.8572 38.4557 58.766 34.5312 59.2605Z"></path></svg>
                </span>
            </div>
            <h3 className="h3 text-white">Cyber Scape Defend</h3>
          </div>
          <p className="mt-6 text-white">
            Corporate restructuring refers to the design process of reorganizing a man company won as out Corporate
          </p>
          <div className="mt-7 pr-[120px] text-primary">
              <div className="relative z-[2] overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide [transition:all_0.3s_linear] inline-flex items-center justify-center md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:bg-black/[.15] after:-z-1 after:[transition:all_.3s_ease-in-out] hover:after:w-full hover:after:left-0 rounded-5 !min-h-fit gap-2.5 bg-transparent !p-0 uppercase text-accent-800 hover:bg-transparent hover:text-primary text-primary hover:text-white after:hidden">
                  <span>READ MORE</span>
                  <span>IC</span>
              </div>
              <span className="absolute -bottom-5 right-5 z-1 text-[68px] font-bold text-primary/10 text-white/10">01</span>
          </div>
      </div>
   </div>
  );
}
