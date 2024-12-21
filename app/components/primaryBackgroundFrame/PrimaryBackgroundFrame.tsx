import Header from '../header/Header';
import styles from './PrimaryBackgroundFrame.module.css';

interface PrimaryBackgroundFrameInterface {
  pageName: string
}

const PrimaryBackgroundFrame: React.FC<PrimaryBackgroundFrameInterface> = ({pageName}) => {
  return (
    <div className="h-screen relative text-white font-roboto">
    <span className={`${styles.contactBackground}`}></span>
    <div className='px-[32px]'>
        <Header/>
    </div>
    <div className="z-10 relative flex items-center justify-between w-full h-full px-[32px]">
        <h1 className="font-secondary text-[2rem] font-bold lg:w-1/2">{pageName}</h1>
        <h1 className="font-secondary text-[1.5rem] font-bold lg:w-1/2 text-right">Home <span className='mx-3'>/</span> {pageName}</h1>
    </div>
    </div>
  )
}

export default PrimaryBackgroundFrame;