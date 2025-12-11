import { marqueeList } from '@/app/constants/marquee-data';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const MarqueeHero = () => {
  return (
    <Marquee className='-top-8 z-30 flex w-full rotate-[-1.89deg] items-center gap-4 bg-neutral-950 px-4 py-6 md:gap-6 md:px-6 md:py-10'>
      {marqueeList.map((marquee, index) => (
        <div className='flex items-center gap-4 md:gap-6' key={index}>
          <div className=''></div>
          <h3 className='text-display-xs md:text-display-2xl text-neutral-25 leading-6 font-bold tracking-tight md:leading-[60px]'>
            {marquee.text}
          </h3>
          <Image
            src='./pembatasMarq.svg'
            alt='pembatas'
            width={32}
            height={35}
            className='h-[35px] w-[32px] md:h-[52px] md:w-[48px]'
          />
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeHero;
