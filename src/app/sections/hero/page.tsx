'use client';
import { useDevice } from '@/app/hook/useIsMobile';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Star, Verified } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import meImg from '@/../public/images/Me1.png';

const HeroPage = () => {
  const device = useDevice();
  return (
    <>
      <section className='bg-primary-400 relative h-[clamp(700px,90vw,890px)] w-full items-center overflow-y-hidden md:h-[clamp(700px,90vw,890px)]'>
        <h1 className='text-display-xl absolute top-[150px] left-1/2 z-10 -translate-x-1/2 text-center text-6xl leading-tight font-extrabold text-[#FDFDFD] md:top-36 md:text-[clamp(60px,15vw,150px)] md:leading-[clamp(78px,19.5vw,195px)]'>
          BERNARDUS DAVID H Y
        </h1>
        {/* Image */}
        <motion.div
          className='absolute bottom-0 left-1/2 z-20 h-[clamp(300px,45vw,660px)] w-[clamp(300px,42vw,630px)] -translate-x-1/2 object-cover'
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.2 }}
          viewport={{ amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        >
          <Image
            src={meImg}
            alt='hero'
            width={1000}
            height={1000}
            sizes='100vw'
            className='absolute -bottom-1/5 size-[300px] md:size-[700px]'
          />
        </motion.div>

        {/* bg lingkaran */}
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(90px,18vw,180px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/80'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(145px,29vw,290px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/60'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.1,
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[clamp(200px,40vw,400px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/40'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.2,
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-1/6 left-1/2 size-[250px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6600EBCC]/20 md:size-[500px]'
          initial={{ scale: 1 }}
          animate={{ scale: 2 }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.3,
          }}
        ></motion.div>

        {/* Self Promote Star */}
        <motion.div
          className='gap-xxs p-lg absolute top-[520px] left-[200px] flex h-[136px] w-36 flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[650px] md:left-[800px] md:h-48 md:w-[200px]'
          initial={{
            rotate: 0,
            x: 0,
            y: 0,
          }}
          whileInView={{
            rotate: device === 'mobile' ? 6.73 : 3.15,
            x: device === 'mobile' ? -120 : -200,
            y: -150,
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 0.8,
          }}
        >
          <h4 className='text-display-xs md:text-display-xl leading-9 font-bold text-[#FDFDFD] md:leading-14'>
            5.0
          </h4>
          <div className='gap-xxs flex md:gap-1'>
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                size={24}
                className='md:size-4xl'
                color='orange'
                fill='orange'
              />
            ))}
          </div>
          <h5 className='text-neutral-25 text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            Problem Solving, Fast Learner
          </h5>
        </motion.div>

        {/* Client */}
        <motion.div
          className='gap-xxs p-lg absolute top-[570px] left-[120px] flex h-fit w-36 flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[600px] md:left-[900px] md:w-52'
          initial={{ rotate: 0, x: 0 }}
          whileInView={{
            rotate: 5.31,
            x: device === 'mobile' ? 180 : 300,
            y: device === 'mobile' ? -20 : 50,
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 1,
          }}
        >
          <h4 className='text-display-xs md:text-display-xl leading-9 font-bold text-[#FDFDFD] md:leading-14'>
            2+
          </h4>
          <h5 className='text-neutral-25 text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            Year Experience
          </h5>
        </motion.div>

        {/* Frontend Developer */}
        <motion.div
          className='gap-xxs p-lg absolute top-[600px] left-[clamp(120px,28vw,550px)] flex flex-col rounded-xl border border-[#FDFDFD]/10 bg-[#28282833]/20 backdrop-blur-md md:top-[800px] md:left-[600px]'
          initial={{ rotate: 0, x: 0, y: 0 }}
          whileInView={{
            rotate: device === 'mobile' ? -10.09 : -3.24,
            x: device === 'mobile' ? -120 : -250,
            y: device === 'mobile' ? -50 : -100,
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 14,
            delay: 1.2,
          }}
        >
          <h4 className='md:text-display-xs text-sm leading-7 font-bold text-[#FDFDFD] md:leading-9'>
            Frontend Developer
          </h4>
          <h5 className='text-neutral-25 gap-xxs flex text-xs leading-[24px] font-medium md:text-sm md:leading-7'>
            <Verified fill='white' color='#6600EBCC' />
            React, NextJs Expert
          </h5>
        </motion.div>
      </section>
    </>
  );
};

export default HeroPage;
